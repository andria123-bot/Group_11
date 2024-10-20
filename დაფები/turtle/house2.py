from turtle import *


#house N1


width (3)
speed (100)
begin_fill()
color ("gray")
for i in range (4):
    forward (200)
    left (90)
end_fill()

#house pillars N1

color ("black")
for i in range (4):
    forward (200)
    left (90)


#door


forward (75)
begin_fill()

color ("brown")
left (90)

forward (80)
right (90)

forward (50)
right (90)

forward (80)
end_fill()

right (90)
color ("black")

forward (50)
right (90)

forward (80)
right (90)

forward (50)
right (90)

forward (80)






#roofN1


penup ()
goto (200,200)

begin_fill()
color("teal")
pendown()

right (150)
forward (200)
left (120)
forward (200)
end_fill()

penup ()
goto (200,200)
pendown()

color ("black")
right (120)
forward (200)
left (120)
forward (200)
left (120)
forward (200)


#roofN2

penup ()
goto (100,373)
pendown ()

begin_fill()
color ("teal")
forward (200)
right (50)
forward (225)
right (130)
forward (252)
end_fill()

color ("black")
right (61)
forward (200)
right (119)
forward (200)
right (49.5)
forward (230)
right (130.5)
forward (445)
backward (445)


#wallN2


begin_fill()
color ("gray")
left (90)
forward (201)
right (90)
forward (245)
right (90)
forward (200)
right (90)
forward (246)
end_fill()
color ("black")
backward (250)
left (90)
backward (200)
right (90)
forward (250)
left (90)
forward (200)


#windowN1


penup ()
goto (0,0)

forward (170)
right (90)
forward (30)
pendown()

begin_fill()

color ("yellow")
for i in range (4):
    forward (40)
    right (90)
end_fill()

color ("black")

for i in range (4):
    forward (40)
    right (90)

#windowN2

penup ()
forward (170)

left (180)
forward (4)
forward (30)
pendown()

begin_fill()
color ("yellow")

for i in range (4):
    forward (40)
    left (90)

end_fill()
color ("black")

for i in range (4):
    forward (40)
    left (90)


#windowN3


penup()
backward (60)
pendown()

begin_fill()
color ("yellow")
backward (190)
left (90)
forward (40)
right (90)
forward (190)
right (90)
forward (40)
end_fill()

color("black")
right (90)
forward (190)
right (90)
forward(40)
right (90)
forward (190)
right (90)
forward(40)
right (90)
forward (95)
right (90)
forward (40)








































































































exitonclick()