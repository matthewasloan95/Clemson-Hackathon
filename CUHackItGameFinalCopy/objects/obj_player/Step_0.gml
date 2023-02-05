/// @description Insert description here
// You can write your code in this editor
if keyboard_check(vk_up) y -= 4;
//if keyboard_check_pressed(vk_up) image_yscale = -1

if keyboard_check(vk_down) y += 4
//if keyboard_check_pressed(vk_down) image_yscale = 1

if keyboard_check(vk_left)x -= 4
if keyboard_check_pressed(vk_left) image_xscale = -1	

if keyboard_check(vk_right)x += 4
if keyboard_check_pressed(vk_right) image_xscale = 1

if keyboard_check(ord("R"))then game_restart()


//vspeed = clamp(vspeed, -1, 5)
vspeed = clamp(vspeed, -1, layer_get_vspeed("Background") )
// if neither UP or DOWN is pressed, slow down
//if not keyboard_check(vk_down) and not keyboard_check(vk_up)
	//vspeed -=sign(vspeed)

x = clamp(x, sprite_width/2, room_width - sprite_width/2)
y = clamp(y, sprite_height/2, room_height - sprite_height/2)

//if keyboard_check(cord("N")) then audio_pause_sound(snd_furretwalk)
//if keyboard_check(cord("Y")) then audio_resume_sound(snd_furretwalk)