from turtle import *
width (2)
speed (100)


#blockHouse


begin_fill()
color ("teal")
for i in range (4):
    forward (200)
    left (90)
end_fill()


#block house lines


width (3)
color ("black")
for i in range (4):
    forward (200)
    left (90)


#roof


begin_fill()
color ("red")
penup ()
goto (200,200)
pendown ()
for i in range (3):
    left (120)
    forward (200)
end_fill()


#roof lines


color ("black")
for i in range (3):
    left (120)
    forward (200)


#windowsN1


penup ()
goto (30, 160)
pendown ()
begin_fill ()
color ("yellow")
for i in range (4):
    forward (45)
    right (90)
end_fill()
color ("black")
for i in range (4):
    forward (45)
    right (90)

#windowsN2

penup ()
goto (125, 160)
pendown ()
begin_fill()
color ("yellow")
for i in range (4):
    forward (45)
    right (90)
end_fill()
color ("black")
for i in range (4):
    forward (45)
    right (90)


#door


penup ()
goto (125, 0)
pendown ()
begin_fill ()
color ("lightblue")
left (90)
forward (75)
left (90)
forward (50)
left (90)
forward (75)
left (90)
forward (50)
end_fill()
color ("black")

for i in range (1):
    left (90)
    forward (75)
for i in range (1):
    left (90)
    forward (50)
for i in range (1):
    left (90)
    forward (75)
for i in range (1):
    left (90)
    forward (50)


#roof pannels


width (1.8)
penup ()
goto (200, 200)
backward (30)
pendown()
left (90)
forward (53)

backward (27)
left (90)

forward (25)
right (90)

forward (71)
backward (25)

right (90)
forward (13)

backward (13)
left (90)

backward (70)
forward (40)

left (90)
forward (25)

right (90)
forward (98)

backward (45)
right (90)

forward (25)
backward (25)

left (90)
backward (95)

forward (75)
left (90)

forward (25)
right (90)

backward (75)
forward (25)

right (90)
forward (25)

backward (25)
left (90)

forward (105)
right (90)

forward (25)
backward (25)
left (90)

forward (35)
backward (71)
left (90)

forward (25)
right (90)

forward (25)
backward (80)

right (90)
forward (25)

backward (25)
left (90)

backward (37)
forward (70)

left (90)
forward (25)

forward (2)
right (90)

backward (70)
forward (20)

right (90)
forward (25)

backward (25)
left (90)

forward (10)
backward (31)

forward (40)
left (90)

forward (20)
backward (20)

left (90)
penup ()

forward (25)
right (90)

forward (25)
pendown ()

right (90)
forward (15)

backward (30)


#ground 


width (3)
penup ()
goto (0,0)
pendown()
begin_fill()
color ("green")
left (90)
forward (180)
left (90)
forward (150)
left (90)
forward (550)
left (90)
forward (150)
left (90)
forward (550)
end_fill()


#treeN1


width (6)
color ("brown")
penup()
backward (90)
right (90)
pendown()
forward (100)
begin_fill()
color ("green")
right (90)
circle (40)
end_fill()


#treeN2


penup ()
forward (400)
pendown ()
begin_fill()
circle (40)
left (90)
end_fill()
color ("brown")
backward (100)


#sun


penup ()
goto (350,350)
pendown()
begin_fill()
color ("yellow")
circle (45)
end_fill()


#mountains


penup ()
goto (-180,0)
color ("gray")
penup ()
begin_fill()
pendown ()
left (20)
forward (170)
left (120)
forward (80)
right (120)
forward (100)
left (160)
forward (343)
left (90)
forward (145)
left (90)
forward (150)
end_fill()


#path


penup ()
goto (75,0)
pendown()
begin_fill()
color ("brown")
backward (150)
right (90)
penup ()
forward (50)
pendown()
left (90)
forward (150)
end_fill()


#fenceN1


width (2)
color ("black")
right (90)
forward (15)
right (90)
forward (150)
right (90)
forward (15)
backward (15)
for i in range (10):
    right (90)
    forward (15)
    left (90)
    forward (15)
    backward (15)

#fenceN2

penup ()
forward (68)
pendown()
forward (15)
pendown ()
left (180)
for i in range (10):
    right (90)
    forward (15)
    left (90)
    forward (15)
    backward (15)










exitonclick()