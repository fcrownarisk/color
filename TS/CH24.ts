interface CH24{
    carbonCount: number;
    hydrogenCount: number;
}
class C2H4 implements CH24 {
     carbonCount: number = 2
     hydrogenCount: number = 4
}

class C6H8 implements CH24 {
     carbonCount: number = 6
     hydrogenCount: number = 8
}

class C14H16 implements CH24 {
     carbonCount: number = 14
     hydrogenCount: number = 16
}
