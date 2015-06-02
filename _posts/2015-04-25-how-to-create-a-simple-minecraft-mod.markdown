---
title: "How to create a simple Minecraft mod"
layout: post
---
A few days ago I decided to create a simple [Minecraft][0] mod which will go through all basic functionality:

* add a new block
* add a new machine to process the new block
* add a recipe to craft another block
* when the player stand or walk on the new crafted block, she will receive a buff

This will let me touch most of the parts in Minecraft and I can see if updating the mod for a new version is really all that pain. As a professional software developmer, I want to understand how one can reasonably protect the own code against changes from updating to a new [Minecraft Forge][1] version and how to refactor code in a mod so it's maintainable and readable even for beginners.

So, how do you add a new block to [Minecraft 1.8][0] with [Minecraft Forge][1]?

First of all, you have to set up your development workspace for a new mod. [I've already written about that][2]. After that, you can start modifying files in your workspace. If you want to have a look at the whole project, you can [head over to the Github project for my mod][3]. :smile:


<h2>KopistaMod.java</h2>
This is the base class of your mod. It's the place where you wire recipes, world generators, blocks and everything else together.
<pre class="brush: java">
package de.kopis.kopista;

import net.minecraftforge.fml.common.FMLLog;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.common.Mod.EventHandler;
import net.minecraftforge.fml.common.Mod.Instance;
import net.minecraftforge.fml.common.event.FMLInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPostInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPreInitializationEvent;
import net.minecraftforge.fml.common.registry.GameRegistry;
import de.kopis.kopista.blocks.AsphaltOre;
import de.kopis.kopista.blocks.ProcessedAsphaltOre;
import de.kopis.kopista.recipes.ProcessedAsphaltOreRecipe;
import de.kopis.kopista.world.KopistaWorldGeneration;

@Mod(modid = KopistaMod.MODID, version = KopistaMod.VERSION)
public class KopistaMod {
	@Instance(value = KopistaMod.MODID)
	public static KopistaMod instance;

	public static final String MODID = "kopista";
	public static final String VERSION = "0.0.1";

	public static AsphaltOre ASPHALTORE;
	public static ProcessedAsphaltOre PROCESSED_ASPHALTORE;

	@EventHandler
	public void init(FMLInitializationEvent event) {
		// create & register blocks
		ASPHALTORE = new AsphaltOre();
		PROCESSED_ASPHALTORE = new ProcessedAsphaltOre();

		// register recipes
		GameRegistry.addRecipe(new ProcessedAsphaltOreRecipe());
	}

	@EventHandler
	public void preInit(FMLPreInitializationEvent event) {
	}

	@EventHandler
	public void load(FMLInitializationEvent event) {
	}

	@EventHandler
	public void postInit(FMLPostInitializationEvent event) {
	}
}
</pre>

Then we have to actually create the new block called *AsphaltOre*:

<h2>AsphaltOre.java</h2>
<pre class="brush: java">
package de.kopis.kopista.blocks;

import net.minecraft.block.material.Material;

public class AsphaltOre extends GenericBlock {

    public AsphaltOre() {
        super(Material.rock, "asphaltOre", 1.5F, 10F);
    }
}
</pre>

To avoid duplicating all the common code for my blocks (I plan to add more than one block) I let *AsphaltOre* extend from another class *GenericBlock*:

<h2>GenericBlock.java</h2>
<pre class="brush: java">
package de.kopis.kopista.blocks;

import net.minecraft.block.Block;
import net.minecraft.block.material.Material;
import net.minecraft.creativetab.CreativeTabs;
import de.kopis.kopista.KopistaMod;
import de.kopis.kopista.helpers.BlockHelper;

public class GenericBlock extends Block {

	private String name;

	public GenericBlock(Material material, String name, float hardness, float resistance) {
		super(material);
		this.name = name;
		setHardness(hardness);
		setResistance(resistance);
		setStepSound(Block.soundTypeStone);
		setUnlocalizedName(this.name);
		setCreativeTab(CreativeTabs.tabBlock);
		setHarvestLevel(HarvestTool.Pickaxe.value(), HarvestLevel.Stone.value());

		BlockHelper.registerBlock(this);
	}

	public String getName() {
		return name;
	}

	public String getTexture() {
		return KopistaMod.MODID + ":" + name;
	}

	protected enum HarvestTool {
		Axe("axe"), Shovel("shovel"), Pickaxe("pickaxe");

		private final String level;

		private HarvestTool(String level) {
			this.level = level;
		}

		@Override
		public String toString() {
			return level;
		}

		public String value() {
			return level;
		}
	}

	protected enum HarvestLevel {
		Wood(0), Stone(1), Iron(2), Diamond(3), Gold(0);

		private final int level;

		private HarvestLevel(int level) {
			this.level = level;
		}

		@Override
		public String toString() {
			return Integer.toString(level);
		}

		public int value() {
			return level;
		}
	}
}
</pre>

This class takes care of all the tedious stuff, like setting the *HarvestLevel*, the *HarvestTool*, the texture name and also registers the block with the *GameRegistry*. You don't see that in the code above, because I created a simple utility class called *BlockHelper*:

<h2>BlockHelper.java</h2>
This class is not doing much at the moment, but I guess there are more methods that I need to share for all blocks I want to create.
<pre class="brush: java">
package de.kopis.kopista.helpers;

import net.minecraft.client.Minecraft;
import net.minecraft.client.resources.model.ModelResourceLocation;
import net.minecraft.item.Item;
import net.minecraftforge.fml.common.registry.GameRegistry;
import de.kopis.kopista.KopistaMod;
import de.kopis.kopista.blocks.GenericBlock;


public class BlockHelper {
	public static void registerBlock(GenericBlock b) {
		GameRegistry.registerBlock(b, b.getName());
		Item block = GameRegistry.findItem(KopistaMod.MODID, b.getName());
		ModelResourceLocation modelLocation = new ModelResourceLocation(b.getTexture(), "inventory");
		final int DEFAULT_ITEM_SUBTYPE = 0;
		Minecraft.getMinecraft().getRenderItem().getItemModelMesher().register(block, DEFAULT_ITEM_SUBTYPE, modelLocation);
	}
}
</pre>

OK, that's for the java code. There is one last piece missing before you can actually run the mod and use the new blocks: the texture and the block model. To use the block in Minecraft, we need to define the blockstate, the model and the actual texture to use. We need to create 3 files and the texture for this:


<h2>Blockstate</h2>
Save this file as *src/main/resources/MODID/blockstates/asphaltOre.json*.
<pre class="brush: js">
{
    "variants": {
        "normal": { "model": "kopista:asphaltOre" }
    }
}
</pre>

<h2>Block Model</h2>
Save this file as *src/main/resources/MODID/models/block/asphaltOre.json*. This file defines how the block looks when placed in your hand.
<pre class="brush: js">
{
    "parent": "block/cube_all",
    "textures": {
        "all": "kopista:blocks/asphaltOre"
    }
}
</pre>

<h2>Item Model</h2>
Save this file as *src/main/resources/MODID/models/item/asphaltOre.json*. This file defines how the block looks in your hand.
<pre class="brush: js">
{
    "parent": "kopista:block/asphaltOre",
    "display": {
        "thirdperson": {
            "rotation": [ 10, -45, 170 ],
            "translation": [ 0, 1.5, -2.75 ],
            "scale": [ 0.375, 0.375, 0.375 ]
        }
    }
}
</pre>

I won't show the texture here, but you can use whatever PNG you want for it. Save the texture file as */src/main/resources/MODID/textures/blocks/asphaltOre.png*. You could even reuse existing textures from within minecraft if you want to. When editing the JSON files, make sure you put your MODID as a prefix to all references, like my MODID *"kopista"* in the examples above. It took me a while to figure out what was wrong when my blocks would show up with the *missing texture* look. :disappointed:

If you followed along the code (or forked my project on github ;-)) you are now ready to use the blocks in your Minecraft mod. But to actually find the new block in *Survival* mode, we have to add a new piece to the world generation. You can do that by adding a new Java class to your mod:

<h2>KopistaWorldGeneration</h2>

<pre class="brush: java">
package de.kopis.kopista.world;

import java.util.Random;

import net.minecraft.util.BlockPos;
import net.minecraft.world.World;
import net.minecraft.world.chunk.IChunkProvider;
import net.minecraft.world.gen.feature.WorldGenMinable;
import net.minecraftforge.fml.common.FMLLog;
import net.minecraftforge.fml.common.IWorldGenerator;
import de.kopis.kopista.KopistaMod;

public class KopistaWorldGeneration implements IWorldGenerator {
	private static final int MIN_HEIGHT_IN_WORLD = 32;
	// generate between 32 and 64
	private static final int MAX_HEIGHT_IN_WORLD = 64 - MIN_HEIGHT_IN_WORLD;
	private static final int MAX_GENERATED_BLOCKS = 10;
	private static final int MAX_VEINS_PER_CHUNK = 10;

	@Override
	public void generate(Random random, int chunkX, int chunkZ, World world,
			IChunkProvider chunkGenerator, IChunkProvider chunkProvider) {
		for (int i = 0; i < MAX_VEINS_PER_CHUNK; i++) {
			// transform chunk x, z
			int realX = chunkX * 16 + random.nextInt(16);
			int realZ = chunkZ * 16 + random.nextInt(16);
			int numberOfBlocks = random.nextInt(MAX_GENERATED_BLOCKS);

			// create a mineable for this ore
			WorldGenMinable mineable = new WorldGenMinable(KopistaMod.ASPHALTORE.getDefaultState(), numberOfBlocks);

			// set a random y for this block
			int y = MIN_HEIGHT_IN_WORLD + random.nextInt(MAX_HEIGHT_IN_WORLD);

			BlockPos blockPosition = new BlockPos(realX, y, realZ);
			if (mineable.generate(world, random, blockPosition)) {
				FMLLog.fine("Generated %d blocks of AsphaltOre at %d,%d,%d",
					numberOfBlocks, blockPosition.getX(), blockPosition.getY(), blockPosition.getZ());
			}
		}
	}
}
</pre>

This world generator is adding a maximum of 10 veins of the new block per chunk, with a maximum of 10 blocks per vein. The blocks will generate between height 32 and 64. There is one final piece missing before the blocks will actually show up in newly generated chunks, we have to register the new world generator. To do that, you have to modify your basic mod class, the one with the *@Mod* annotation.

<h2>KopistaMod.java</h2>

<pre class="brush: java">
	...
	@EventHandler
	public void load(FMLInitializationEvent event) {
		// register world generator
		int generationWeight = 1;
		GameRegistry.registerWorldGenerator(new KopistaWorldGeneration(), generationWeight);
	}
	...
</pre>

That's it. Load the mod into your Minecraft client, create a new world or go into previously unknown terrain in your existing world and you will get the new block.

I guess while doing more work on my own mod, I will post more articles on Minecraft mod development with Forge. Keep coming back for updates. :smile:


[0]: http://minecraft.net/
[1]: http://files.minecraftforge.net/
[2]: {% post_url 2014-02-27-how-to-create-a-minecraft-mod-with-forge %}
[3]: https://github.com/MoriTanosuke/kopista

