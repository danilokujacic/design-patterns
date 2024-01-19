
interface ChairFactoryInterface {

     createChairProduct(): Chair
}

abstract class ModernChairsFactory implements ChairFactoryInterface {
    abstract createChairProduct(): Chair
}
abstract class OldChairsFactory implements ChairFactoryInterface {
    abstract createChairProduct(): Chair
}

interface Chair {
    doSomeStuffChair();
}