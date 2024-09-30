interface CH4 {
    carbonCount: number;
    hydrogenCount: number;
}
class C5H12 implements CH4 {
    readonly carbonCount: number = 5
    readonly hydrogenCount: number = 12
}

class C17H36 implements C53H108 {
    readonly carbonCount: number = 17
    readonly hydrogenCount: number = 36
}

class C53H108 implements CH4 {
    readonly carbonCount: number = 53
    readonly hydrogenCount: number = 108
}
function *generateCH22(){
    yield new C5H12()
    yield new C17H36()
    yield new C53H108()
}
