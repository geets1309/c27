class Chain{


constructor(body1,body2)
{
    var options=
    {
        bodyA:body1,
bodyB:body2,
stiffness:0.04,
length:15

    }
this.chain=Constraint.create(options);
World.add(world,this.chain);
}

display()
{var x=this.chain.bodyA.position;
    var y=this.chain.bodyB.position;
//line (x.x,x.y,y.x,y.y);

}

}