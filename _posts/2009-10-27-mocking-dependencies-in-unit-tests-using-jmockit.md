---
title: 'Mocking dependencies in unit tests using JMockIt'
layout: post
---
*Ein weiterer Blogpost aus dem Firmenblog, wieder in Englisch.*

**Garage & GarageTest**

This test case demonstrate the use of [JMockIt][1] and its *Expectations* to resolve dependencies in unit tests. *Expectations* are a way to easily mock the behavior of an object in unit tests, without creating interfaces, classes and other overhead. Take a look at the full unit test first, and I'll explain what's done there later. You can find the interface ´Garage´ and the classes ´CheapGarage´ and ´EngineFactory´ at the end of this blogpost.

Now, back to the method `testRepairWithExpectationEngineFactory()`. The `EngineFactory` is a dependency buried down in the `CheapGarage` class that is responsible for replacing the `Engine` in a `Car`. There is a mocked instance of `EngineFactory` in this unit test that will return a new `DieselEngine` every time the method `instantiate()` is called with any kind of argument. This way I can control exactly how the hidden call to a factory behaves.  JMockIt has a bunch of other useful features and I recommend it for all unit tests. If you care about your tests and try to avoid testing dependencies instead of your logic, then you should start using JMockIt today. 😀

**Car.java**

````java
package de.kopis.example;

public class Car {
	protected Engine engine;
	
	public Car(Engine e) {
		engine = e;
	}
	
	public void replaceEngine(Engine e) {
		engine = e;
	}
}
````

**Engine.java**

````java
package de.kopis.example;

public interface Engine {}

class GasolineEngine implements Engine {}
class DieselEngine implements Engine {}
````

**Garage/CheapGarage.java**

````java
package de.kopis.example;

public interface Garage {
  public Car repairEngine(Car car);
}

abstract class AbstractGarage implements Garage {
  public abstract Car repairEngine(Car car);
}

class CheapGarage extends AbstractGarage {
  public Car repairEngine(Car car) {
    replaceEngineWithNewInstance(car);
    return car;
  }

  private void replaceEngineWithNewInstance(Car car) {
    try {
      Engine newEngine = EngineFactory.instantiate(car.engine);
      car.replaceEngine(newEngine);
    } catch ( InstantiationException e ) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    } catch ( IllegalAccessException e ) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
  }
}

class EngineFactory {
  public EngineFactory() {}

  public static Engine instantiate(Engine engine) throws InstantiationException, IllegalAccessException {
    Class<? extends Engine> engineClass = engine.getClass();
    Engine newEngine = engineClass.newInstance();
    return newEngine;
  }
}
````

**GarageTest.java**

````java
package de.kopis.example;

import static org.junit.Assert.*;

import mockit.Expectations;

import org.junit.Test;

public class GarageTest {
  @Test
  public void testRepair() {
    Garage g = new CheapGarage();
    Engine expectedEngine = new GasolineEngine();
    Car expectedCar = new Car(expectedEngine);
    Car actualCar = g.repairEngine(expectedCar);
    assertSame(expectedCar, actualCar);
    assertNotSame(expectedCar.engine, expectedEngine);
  }

  @Test
  public void testRepairWithExpectationEngineFactory() throws InstantiationException, IllegalAccessException {
    final Engine expectedEngine = new DieselEngine();
    final Engine actualEngine = new GasolineEngine();
    final Garage g = new CheapGarage();
    final Car expectedCar = new Car(actualEngine);
    // here it is still the Engine built into the car
    assertSame(expectedCar.engine, actualEngine);

    new Expectations() {
      EngineFactory mock;
      {
        mock.instantiate(actualEngine); returns(new DieselEngine());
      }
    };

    Car actualCar = g.repairEngine(expectedCar);
    assertSame(expectedCar, actualCar);
    // normally this will be a GasolineEngine, because that was built into the car
    // but because of the mocked EngineFactory, we get a DieselEngine instead
    assertTrue(expectedCar.engine instanceof DieselEngine);
    assertNotSame(expectedCar.engine, expectedEngine);
  }
}
````

[0]: https://gist.github.com/MoriTanosuke/615103
[1]: http://code.google.com/p/jmockit/
