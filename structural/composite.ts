interface Composable {
    x:string;
    y:string;
}

class Tree implements Composable {
    x = '15';
        y = '15';
    children: Composable[] = [
        new Tree(),
        new Leaf(),
        new Leaf(),
        new Leaf(),
        new Leaf(),
        new Leaf(),
    ];
    add(child: Composable) {
        this.children.push(child);
    }
    remove(child: Composable) {
        this.children.pop();
    }
}

class Leaf implements Composable {
        x = '15';
        y = '15';
}