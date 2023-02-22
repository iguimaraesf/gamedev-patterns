# Chapter 01
[Entity Component System](https://itnext.io/entity-component-system-in-action-with-typescript-f498ca82a08e)

In this chapter, we set up a project, learned what **Entity Component System** is and how to implement it with TypeScript using interfaces and abstract classes! We also covered them with **Unit Tests** to make sure they work as expected.

NodeReact12.10.0.bat
```
if "%1" == "" (
	echo "uso: NodeReact <nome da pasta do novo projeto>
	exit
)
set pasta = "%~dp0%1"

mkdir "%~dp0%1"

docker run --rm --volume "%~dp0%1:/srv/react-docker" --workdir "/srv/react-docker" --publish 8080:8080 -it node:12.10.0 bash
```
# Chapter 02
[Game Loop part 1/2](https://levelup.gitconnected.com/gamedev-patterns-and-algorithms-with-typescript-game-loop-part-1-2-699919bb9b71)

Awesome! In this chapter, we learned what the Game Loop is and how we can combine it with Entity Component System.

[Game Loop part 2/2](https://levelup.gitconnected.com/gamedev-patterns-and-algorithms-in-action-with-typescript-game-loop-2-2-c0d57a8e5ec2)

You should be proud of yourself, you have accomplished **A LOT**: learned about Game Loop and how it plays in one team with the Entity and Components, how to execute code every frame, discovered lifecycle methods of Entity and how to use them with the Game Loop, and, of course, build the core Game Entity and covered it with tests! Amazing progress!

# Chapter 03
[Drawing the grid 1/5](https://itnext.io/building-a-game-with-typescript-drawing-grid-1-5-aaf68797a0bb)

Awesome! We have drawn our entire grid on the screen and make it look good. We also made it adjustable by the global settings, independently of code.

[Drawing the grid 2/5](https://javascript.plainenglish.io/building-a-game-with-typescript-drawing-grid-2-5-206555719490)

Awesome! We did a lot, but nothing changed on the screen: we still can only see the old “dirty” drawing of the Grid. But we accomplished a lot: we learned how to test the functionality of the class without creating the instance, we introduced two new entities: ```Grid``` and ```Node```, decoupled them from the Game and even set up our very first component!

[Drawing the grid 3/5](https://medium.datadriveninvestor.com/building-a-game-with-typescript-drawing-grid-3-5-1fb94211c4aa)

Cool! That was a lot of coding! At the beginning of this post, we had all drawing functionality hardcoded in the Game entity, making it almost like a ‘god object’.

We refactored our code and moved all drawings to where it belongs: NodeDrawComponent. Along the way, we identify the signature of the Node and are to determine its location using Start, End coordinates, and Index position within the Grid. Vector2D, the new structure we introduced, helps us to deal with two-dimensional properties.

[Drawing the grid 4/5](https://medium.com/swlh/building-a-game-with-typescript-iii-drawing-grid-4-5-398af1dd638d)

Nice! In this post, we created our own little rendering system, the abstraction layer on top of the browser’s canvas API.

[Drawing the grid 5/5](https://medium.com/@gregsolo/building-a-game-with-typescript-drawing-grid-5-5-49454917b3af)

Awesome! This concludes Chapter III, “Drawing the Grid”. We accomplished a lot in this final part of the Chapter! We discussed the notion of ```layers``` of canvases in our game and set up a provider of the ```Background``` layer. We used it within ```NodeDrawComponent```, which now continuously redraws ```Node``` every frame, ready to react on any change.

This chapter was dedicated to drawing the Grid: the fundamental piece of our game. Let’s stop for a moment and appreciate the path we have passed.

We started our first unsure steps by drawing the grid directly and “dirty” with the browser’s canvas API. We then established a structural hierarchy of the game by defining ```Grid``` and ```Node``` entities. We found it reasonable to make drawing logic a specific component of the ```Node```: ```NodeDrawComponent```. We make it possible to easily pass tuple data, like coordinates and sizes, thanks to the ```Vector2d``` structure. Finally, we created a small rendering engine and layer system. It sure has been a long journey, but I hope you enjoined it!
