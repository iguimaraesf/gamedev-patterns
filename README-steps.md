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

docker run --rm --volume "%~dp0%1:/srv/react-docker" --workdir "/srv/react-docker" --publish 3000:3000 -it node:12.10.0 bash
```
# Chapter 02
[Game Loop part 1/2](https://levelup.gitconnected.com/gamedev-patterns-and-algorithms-with-typescript-game-loop-part-1-2-699919bb9b71)

Awesome! In this chapter, we learned what the Game Loop is and how we can combine it with Entity Component System.
