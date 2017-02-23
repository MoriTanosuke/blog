---
title: "Run Feedbin in your local Kubernetes cluster"
layout: post
---
After listening to [the Changelog Podcast, episode 240][2] today I wanted to run [Feedbin][0] in a local [kubernetes][1] cluster. I'll skip the installation of *kubernetes* for now, but you can [read about setting kubernetes up with *minikube*][3] elsewhere. For this short article, I'll just describe the commands that are needed to get a first version of *Feedbin* up and running in your local cluster.

First of all, create a [Postgres][4] database:

    $ kubectl run postgres --image=postgres --port=5432
    $ kubectl expose service postgres --type=NodePort

Because this is purely for demonstration, I'm not setting a custom postgres username nor password. Don't do this if you want to run *Feedbin* for real.

The first command actually created the container to run postgres, the second command created a [kubernetes service][5] for it. From the docs:

> A Kubernetes Service is an abstraction which defines a logical set of 
> Pods and a policy by which to access them - sometimes called a micro-service. 
> The set of Pods targeted by a Service is (usually) determined by a Label 
> Selector (see below for why you might want a Service without a selector).
> As an example, consider an image-processing backend which is running with 
> 3 replicas. Those replicas are fungible - frontends do not care which backend 
> they use. While the actual Pods that compose the backend set may change, the 
> frontend clients should not need to be aware of that or keep track of the list 
> of backends themselves. The Service abstraction enables this decoupling.

So now we have a *postgres* service which can be used by other pods in the cluster. You can always check the status of your pods with the following command:

    $ kubectl get pods
    NAME                              READY     STATUS    RESTARTS   AGE
    postgres-1342422565-hzgx9         1/1       Running   0          1m

Next is running *Feedbin* and I'm using an existing docker image [scavone/feedbin][6]:

    $ kubectl run feedbin --image=scavone/feedbin --port=9292 --env POSTGRES_USERNAME=postgres --env POSTGRES=postgres --env POSTGRES_PASSWORD=
    $ kubectl expose deployment feedbin --type=NodePort

The first command creates the *Feedbin* pod and provides the *postgres* connection settings via environment variables. *Kubernetes* takes care of the service name *postgres*, so the new *feedbin* pod can actually talk to the database which was created and exposed as a service earlier. The second command again exposes the new pod as a service in *Kubernetes*, so others can access it.

Using *minikube* you can now open a browser for your *Feedbin* installation:

    $ minikube service feedbin

This should open your default browser and show the *Feedbin* login.

As always, if you have questions or corrections, please leave a comment or send me an email. 🙂

[0]: https://feedbin.com/
[1]: https://kubernetes.io/
[2]: https://changelog.com/podcast/240
[3]: https://kubernetes.io/docs/getting-started-guides/minikube/
[4]: https://www.postgresql.org/
[5]: https://kubernetes.io/docs/user-guide/services/
[6]: https://hub.docker.com/r/scavone/feedbin/
