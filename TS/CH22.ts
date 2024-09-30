interface CH22 {
    carbonCount: number;
    hydrogenCount: number;
}
class C2H2 implements CH22 {
     carbonCount: number = 2
     hydrogenCount: number = 2
}

class C4H2 implements CH22 {
     carbonCount: number = 4
     hydrogenCount: number = 2
}

class C6H2 implements CH22 {
     carbonCount: number = 6
     hydrogenCount: number = 2
}
void function *generateCH22(){
    yield new C2H2()
    yield new C4H2()
    yield new C6H2()
}

