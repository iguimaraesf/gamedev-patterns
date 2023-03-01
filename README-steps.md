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

## Chapter 04
[Ships 1/4](https://levelup.gitconnected.com/building-a-game-with-typescript-colors-and-layers-337b0e4d71f)

Cool! We made all the necessary preparations to set up a stage for drawing Ships. We created a convenient tool that helps us work with colors. Also, we updated our rendering engine to support a new primitive shape: circle. And of course, we introduced a new canvas layer: ```Foreground```, a special place for our future ships to ensure they always stay on top of the image.

[Ships 2/4](https://medium.datadriveninvestor.com/building-a-game-with-typescript-team-and-fleet-f223d39e9248)

Nicely done! In this tutorial, we discussed the notion of Team and even set up two teams in our game. We also created our very own ```Fleet```, that is, a collection of ```Ships```. We are finally done with the preparations!

[Ships 3/4](https://levelup.gitconnected.com/building-a-game-with-typescript-drawing-ship-14e6c19caa38)

This was great! We introduced new piece of the puzzle, ```ShipDrawComponent```, that is accountable to draw ship utilizing our humble rendering engine. We also tried something we never did before in this tutorial: we used Test Driven Development to cook this component.

[Ships 4/4](https://medium.com/swlh/building-a-game-with-typescript-ship-and-locomotion-4f5969675993)

Congrats, you made it! This was the last part of Chapter IV “Ships”. It was a long run, but we should be proud of ourselves! Just think about how much we have accomplished!

We started by introducing a new utility: ```Color``` that helps us deal with RGBA colors within the game. Then extended our humble rendering engine and made it render circles. And then we added a new canvas layer, “foreground”, preparing the stage for the key elements of the gameplay: ```Ships```. We made sure this layer always stays on top of others so ```Ships``` won’t be accidentally blocked or painted over something else.

Also, we spend some time deliberating about conflict in games and the notion of “team”, which led us to introduce new members of our system. And then we jumped straight to the ```Fleet```, a collection of ```Ships```. We used it to awake, update, and spawn all ```Ships``` that belong to a particular ```Team```.

Finally, we drew the ```Ships```! We did so by introducing 2 new components: ```Draw``` and ```Locomotion```, since ```Ship``` has to have ```position``` ```Node``` to be shown.

## Chapter 05
[Input system 1/3](https://itnext.io/building-a-game-with-typescript-input-system-1-3-46d0b3dd7662)

Awesome job! We did the very first, “dirty” round of code for our little “input system”. A plethora of questions remains unanswered. We are listening to the event on every single ```Node```. Which means, we react to the same event 36 times (that’s the number of ```Nodes``` we have now)? Is there a better way?

Also, what if we have something else that is clickable, not just ```Node```? Do we have to repeat the same code we just wrote within ```Awake``` for every element we want to click?

[Input system 2/3](https://levelup.gitconnected.com/building-a-game-with-typescript-input-system-2-3-cd419e36027c)

We did a tremendous job converting out “dirty” code from the previous installment into a more robust system. We started by moving ```addEventListener``` to the top of the “food chain”: all the way to the ```Game``` entity, introducing ```GameInputComponent```. Also, we quickly updated the way we test the ```Game``` entity by getting rid of redundant fake components and checking real-life ones in action.

We then spent a great deal of time talking about ```OnclickComponent```. This component is responsible for making sure those who are interested in the click event will get their message. This discussion led us through different approaches: interface, regular class, and finally abstract class.

[Input system 3/3](https://medium.com/swlh/building-a-game-with-typescript-input-system-3-3-8492552579f1)

This concludes this short Chapter. We learned how we can populate click events from DOM ```body``` down to the specific ```Node``` and make them active. We introduced an abstract ```OnclickComponent``` that gives us the flexibility to delegate an event without the necessity to hold information about specific responders. And of course, we covered all new functionality with proper tests.

## Chapter 06

[Pathfinding and movement 1/7](https://blog.gregsolo.me/articles/building-a-game-with-typescript-pathfinding-and-movement-17-introduction)

This concludes our introduction to this Chapter. We have set up clear goals by describing the rules of the game when it comes to locomotion. We outlined the main technical challenges we need to overcome in this Chapter, as well as prepared a little debug tool which will help us implement new features with continuously increasing complexity.

[Pathfinding and movement 2/7](https://blog.gregsolo.me/articles/building-a-game-with-typescript-pathfinding-and-movement-27-highlighting-locomotion-range)

Phew! This was a long article but I hope you enjoyed it! We wrote a lot of code this time and should be proud of ourselves! First, we introduced the notion of “neighbors” of the ```Node```: link to a bordering ```Nodes``` which we then used to traverse and highlight all Nodes in a specific, configurable range. We added ```Ship``` to the ```Node``` so the latter has a chance to know if it's occupied now by any ```Ship```. We use debug tools to display if ```Node``` is indeed aware of the presence of the ```Ship```. We also refactored ```ShipLocomotionComponent``` to always have a reference to the ```Node```. And finally, introduced the concept of an ”active” ```Ship```.

[Pathfinding and movement 3/7](https://blog.gregsolo.me/articles/building-a-game-with-typescript-pathfinding-and-movement-37-graph-and-priority-queue)

Awesome job! We have prepared the utilities we'll need to implement our Pathfinder. The next installment will be all about it. Cannot wait to see you then!

[Pathfinding and movement 4/7](https://blog.gregsolo.me/articles/building-a-game-with-typescript-pathfinding-and-movement-47-pathfinder)

Awesome job! It was not an easy installment but you did it! You prepared your very-own implementation of Pathfinder. We will continue on this in the next article: we are going to apply this algorithm to our Grid. We also are going to add one more debug tool to illustrate the path and make sure it works correctly. Cannot wait to see you then!

[Pathfinding and movement 5/7](https://blog.gregsolo.me/articles/building-a-game-with-typescript-pathfinding-and-movement-57-finding-the-path)

Congrats, you did it! You have a fully functioning path-finding solution for this game! No matter where Ship may stand, we can quickly determine a path to the desired destination. 

[Pathfinding and movement 6/7](https://blog.gregsolo.me/articles/building-a-game-with-typescript-pathfinding-and-movement-6-instant-locomotion)

And that's it! In this installment we finally made our Ship moving along the board. It was a long journey with a few setbacks and surprise issues but you made it all the way to the end! Congrats!
