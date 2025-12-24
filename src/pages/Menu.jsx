import React, { useState } from 'react';
import QRCode from 'react-qr-code';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FaPepperHot, FaHamburger, FaCookieBite, FaLeaf } from 'react-icons/fa';
import { GiCupcake, GiFullPizza, GiDumpling, GiMeal, GiNoodles, GiFriedEggs } from 'react-icons/gi';
import { MdFastfood, MdRiceBowl, MdRamenDining, MdEmojiFoodBeverage, MdOutlineSoupKitchen } from 'react-icons/md';
import { LuSandwich } from "react-icons/lu";
import { IoEggOutline, IoChevronDown, IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import { CiFries } from "react-icons/ci";

// --- MENU DATA ---
const categoryIcons = {
    snacks: MdFastfood,
    momos: GiDumpling,
    pasta: GiNoodles, // New Category
    chilli: FaPepperHot,
    burgers: FaHamburger,
    rolls: MdFastfood,
    shanghai: GiNoodles,
    chowmein: MdRamenDining,
    rice: MdRiceBowl,
    biryani: MdRiceBowl,
    beverages: MdEmojiFoodBeverage,
    beverages_2: MdEmojiFoodBeverage,
    muffins: GiCupcake,
    cookies: FaCookieBite,
    pizza: GiFullPizza,
    sandwich: LuSandwich,
    egg: IoEggOutline,
    fries: CiFries,
    sprouts: FaLeaf,
    soup: MdOutlineSoupKitchen,
    thali: GiMeal,
};

const menuData = {
    snacks: {
        name: 'Snacks',
        items: [
            { name: 'Mini Kachauri + Ghughni', price: "₹39", imgSrc: 'https://www.chaicafeteria.com/images/kachauri_ghughni.webp' },
            { name: 'Samosa', price: "₹9", imgSrc: 'https://www.chaicafeteria.com/images/samosa.webp' },
            { name: 'Samosa Paw', price: "₹29", imgSrc: 'https://www.chaicafeteria.com/images/samosa_paw.webp' },
            { name: 'Bada Paw', price: "₹29", imgSrc: 'https://www.chaicafeteria.com/images/bada_paw.webp' },
            { name: 'Egg Paw', price: "₹39", imgSrc: 'https://www.chaicafeteria.com/images/egg_paw.webp' },
            { name: 'Veg. Pakoda', price: "₹59", imgSrc: 'https://www.chaicafeteria.com/images/veg_pakoda.webp' },
            { name: 'Paneer Pakoda', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/paneer_pakoda.webp' },
            { name: 'Bread Pakoda', price: "₹49", imgSrc: 'https://www.chaicafeteria.com/images/bread_pakoda.webp' },
            { name: 'Onion Pakoda (6 Pcs.)', price: "₹69", imgSrc: 'https://www.chaicafeteria.com/images/onion_pakoda.webp' },
            { name: 'Garlic Bread', price: "₹79", imgSrc: 'https://www.chaicafeteria.com/images/garlic_bread.webp' },
            { name: 'Aalo Bonda', price: "₹29", imgSrc: 'https://www.chaicafeteria.com/images/aalo_bonda.webp' },
            { name: 'Cheese Ball (8 Pcs.)', price: "₹69", imgSrc: 'https://www.chaicafeteria.com/images/cheese_ball.webp' },
            { name: 'Poha of your Choice', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/poha.webp' },
            { name: 'Bread Poha', price: "₹99", imgSrc: 'https://www.chaicafeteria.com/images/bread_poha.webp' },
            { name: 'Masala Sweet Corn', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/masala_sweet_corn.webp' },
            { name: 'Crispy Corn', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/crispy_corn.webp' },
            { name: 'Potato Chop', price: "₹59", imgSrc: 'https://www.chaicafeteria.com/images/potato_chop.webp' },
            { name: 'Rotato Potato', price: "₹39", imgSrc: 'https://www.chaicafeteria.com/images/rotato_potato.webp' },
            { name: 'Dahi Bada', price: "₹39", imgSrc: 'https://www.chaicafeteria.com/images/dahi_bada.webp' },
        ]
    },
    pasta: {
        name: 'Pasta & Maggie',
        items: [
            { name: 'Red Sauce Pasta', price: "₹119", imgSrc: 'https://www.chaicafeteria.com/images/red_sauce_pasta.webp' },
            { name: 'Masala Sauce Pasta', price: "₹139", imgSrc: 'https://www.chaicafeteria.com/images/masala_pasta.webp' },
            { name: 'White Sauce Pasta', price: "₹159", imgSrc: 'https://www.chaicafeteria.com/images/white_sauce_pasta.webp' },
            { name: 'Maggie', price: "₹49", imgSrc: 'https://www.chaicafeteria.com/images/maggie.webp' },
            { name: 'Veggie Masala Maggie', price: "₹59", imgSrc: 'https://www.chaicafeteria.com/images/veg_maggie.webp' },
            { name: 'Veg. Cheese Masala Maggie', price: "₹79", imgSrc: 'https://www.chaicafeteria.com/images/cheese_maggie.webp' },
            { name: 'Cheese Corn Maggie', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/corn_maggie.webp' },
            { name: 'Paneer Maggie', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/paneer_maggie.webp' },
            { name: 'Paneer Cheese Maggie', price: "₹109", imgSrc: 'https://www.chaicafeteria.com/images/paneer_cheese_maggie.webp' },
            { name: 'Egg Maggie', price: "₹109", imgSrc: 'https://www.chaicafeteria.com/images/egg_maggie.webp' },
            { name: 'Chicken Maggie', price: "₹139", imgSrc: 'https://www.chaicafeteria.com/images/chicken_maggie.webp' },
            { name: 'Chicken Egg Maggie', price: "₹149", imgSrc: 'https://www.chaicafeteria.com/images/chicken_egg_maggie.webp' },
        ]
    },
    momos: {
        name: 'Momos',
        items: [
            { name: 'Veg Momos', price: "H-₹69/ F-₹129", imgSrc: 'https://www.chaicafeteria.com/images/veg_momos.webp' },
            { name: 'Veg Fry Momos', price: "H-₹79/ F-₹139", imgSrc: 'https://www.chaicafeteria.com/images/veg_fry_momos.webp' },
            { name: 'Veg Pan Fry Momos', price: "H-₹89/ F-₹149", imgSrc: 'https://www.chaicafeteria.com/images/veg_pan_fry_momos.webp' },
            { name: 'Paneer Momos (6/12 pcs)', price: "H-₹89/ F-₹149", imgSrc: 'https://www.chaicafeteria.com/images/paneer_momos.webp' },
            { name: 'Paneer Fried Momos (6/12 pcs)', price: "H-₹99/ F-₹189", imgSrc: 'https://www.chaicafeteria.com/images/paneer_fry_momos.webp' },
            { name: 'Pan Fried Paneer Momos', price: "H-₹109/ F-₹149", imgSrc: 'https://www.chaicafeteria.com/images/paneer_pan_fry_momos.webp' },
            { name: 'Chicken Momos', price: "H-₹89/ F-₹179", imgSrc: 'https://www.chaicafeteria.com/images/chicken_momos.webp' },
            { name: 'Chicken Fry Momos', price: "H-₹99/ F-₹189", imgSrc: 'https://www.chaicafeteria.com/images/chicken_fry_momos.webp' },
            { name: 'Chicken Pan Fry Momos', price: "H-₹109/ F-₹149", imgSrc: 'https://www.chaicafeteria.com/images/chicken_pan_fry_momos.webp' },
        ]
    },
    chilli: {
        name: 'Chilli',
        items: [
            { name: 'Chana Chilli', price: "H-₹79/ F-₹139", imgSrc: 'https://www.chaicafeteria.com/images/chana_chilli.webp' },
            { name: 'Veg Manchurian', price: "6pcs-₹69/ 12pcs-₹119", imgSrc: 'https://www.chaicafeteria.com/images/veg_manchurian.webp' },
            { name: 'Chilli Paneer', price: "6pcs-₹79/ 12pcs-₹149", imgSrc: 'https://www.chaicafeteria.com/images/chilli_paneer.webp' },
            { name: 'Potato Chilli', price: "H-₹79/ F-₹139", imgSrc: 'https://www.chaicafeteria.com/images/chilli_potato.webp' },
            { name: 'Mushroom Chilli', price: "H-₹79/ F-₹139", imgSrc: 'https://www.chaicafeteria.com/images/mushroom_chilli.webp' },
            { name: 'Baby Corn Chilli', price: "H-₹69/ F-₹129", imgSrc: 'https://www.chaicafeteria.com/images/chilli_baby_corn.webp' },
            { name: 'Corn Chilli', price: "H-₹79/ F-₹139", imgSrc: 'https://www.chaicafeteria.com/images/corn_chilli.webp' },
            { name: 'Bone Chilli', price: "6pcs-₹89/ 12pcs-₹179", imgSrc: 'https://www.chaicafeteria.com/images/bone_chilli.webp' },
            { name: 'Boneless Chilli', price: "H-₹99/ F-₹189", imgSrc: 'https://www.chaicafeteria.com/images/boneless_chilli.webp' },
            { name: 'Crispy Lollipop', price: "12pcs-₹99", imgSrc: 'https://www.chaicafeteria.com/images/crispy_lollipop.webp' },
        ]
    },
    burgers: {
        name: 'Burgers',
        items: [
            { name: 'Veg Burger', price: "₹59", imgSrc: 'https://www.chaicafeteria.com/images/burger_4.webp' },
            { name: 'Veg Cheese Burger', price: "₹69", imgSrc: 'https://www.chaicafeteria.com/images/burger_veg_cheese.webp' },
            { name: 'Paneer Burger', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/burger_3.webp' },
            { name: 'Paneer Cheese Burger', price: "₹99", imgSrc: 'https://www.chaicafeteria.com/images/burger_paneer_cheese.webp' },
            { name: 'Chicken Burger', price: "₹99", imgSrc: 'https://www.chaicafeteria.com/images/burger_2.webp' },
            { name: 'Chicken Cheese Burger', price: "₹119", imgSrc: 'https://www.chaicafeteria.com/images/burger_chicken_cheese.webp' },
            { name: 'Egg Burger', price: "₹69", imgSrc: 'https://www.chaicafeteria.com/images/burger_1.webp' },
            { name: 'Egg Cheese Burger', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/burger_egg_cheese.webp' },
        ]
    },
    rolls: {
        name: 'Rolls',
        items: [
            { name: 'Veg Roll', price: "₹49", imgSrc: 'https://www.chaicafeteria.com/images/veg_roll.webp' },
            { name: 'Paneer Roll', price: "₹69", imgSrc: 'https://www.chaicafeteria.com/images/paneer_roll.webp' },
            { name: 'Mushroom Roll', price: "₹59", imgSrc: 'https://www.chaicafeteria.com/images/mushroom_roll.webp' },
            { name: 'Veg Mix Roll', price: "₹79", imgSrc: 'https://www.chaicafeteria.com/images/veg_mix_roll.webp' },
            { name: 'Egg Roll', price: "₹59", imgSrc: 'https://www.chaicafeteria.com/images/roll_egg.webp' },
            { name: 'Chicken Roll', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/roll_chicken.webp' },
            { name: 'Chicken Egg Roll', price: "₹99", imgSrc: 'https://www.chaicafeteria.com/images/roll_chicken_egg.webp' },
            { name: 'Double Egg Chicken Roll', price: "₹129", imgSrc: 'https://www.chaicafeteria.com/images/roll_special.webp' },
            { name: 'Chilli Paratha (6pcs)', price: "H-₹89/ F-₹129", imgSrc: 'https://www.chaicafeteria.com/images/chilli_paratha.webp' },
            { name: 'Chicken Chilli Paratha', price: "H-₹129/ F-₹149", imgSrc: 'https://www.chaicafeteria.com/images/chicken_chilli_paratha.webp' },
        ]
    },
    pizza: {
        name: 'Pizza',
        items: [
            { name: 'Customized Veg. Pizza', price: '₹189', imgSrc: 'https://www.chaicafeteria.com/images/veg_pizza.webp' },
            { name: 'Margherita Pizza', price: '₹129', imgSrc: 'https://www.chaicafeteria.com/images/margherita_pizza.webp' },
            { name: 'Pasta Pizza', price: '₹149', imgSrc: 'https://www.chaicafeteria.com/images/pasta_pizza.webp' },
            { name: 'Cheese Onion Pizza', price: '₹159', imgSrc: 'https://www.chaicafeteria.com/images/chesse_onion_pizza.webp' },
            { name: 'Mushroom Pizza', price: '₹149', imgSrc: 'https://www.chaicafeteria.com/images/mushroom_pizza.webp' },
            { name: 'Paneer Tikka Pizza', price: '₹159', imgSrc: 'https://www.chaicafeteria.com/images/paneer_tikka_pizza.webp' },
            { name: 'Paneer Tandoori Pizza', price: '₹149', imgSrc: 'https://www.chaicafeteria.com/images/paneer_tandoori_pizza.webp' },
            { name: 'Baby Corn Pizza', price: '₹149', imgSrc: 'https://www.chaicafeteria.com/images/baby_corn_pizza.webp' },
            { name: 'Tomato Pizza', price: '₹149', imgSrc: 'https://www.chaicafeteria.com/images/tomato_pizza.webp' },
            { name: 'Sweet Corn Pizza', price: '₹149', imgSrc: 'https://www.chaicafeteria.com/images/sweet_corn_pizza.webp' },
            { name: 'Onion Capsicum Pizza', price: '₹179', imgSrc: 'https://www.chaicafeteria.com/images/onion_capsicum_pizza.webp' },
            { name: 'Garden Special Pizza', price: '₹179', imgSrc: 'https://www.chaicafeteria.com/images/garden_special_pizza.webp' },
            { name: 'Capsicum & Paneer Pizza', price: '₹179', imgSrc: 'https://www.chaicafeteria.com/images/paneer_capsicum_pizza.webp' },
            { name: 'Capsicum Pizza', price: '₹149', imgSrc: 'https://www.chaicafeteria.com/images/capsicum_pizza.png' },
            { name: 'Peper Barbeque Chi. Pizza', price: '₹169', imgSrc: 'https://www.chaicafeteria.com/images/paneer_bbq_pizza.webp' },
            { name: 'Chicken Sausage Pizza', price: '₹179', imgSrc: 'https://www.chaicafeteria.com/images/chicken_sausage_pizza.webp' },
            { name: 'Chicken Tikka Pizza', price: '₹179', imgSrc: 'https://www.chaicafeteria.com/images/chicken_tikka.webp' },
            { name: 'Chicken Sweet Corn Pizza', price: '₹189', imgSrc: 'https://www.chaicafeteria.com/images/chicken_sweet_corn_pizza.webp' },
            { name: 'Chicken Pepperoni Pizza', price: '₹179', imgSrc: 'https://www.chaicafeteria.com/images/chicken_pepperoni.webp' },
            { name: 'Non-Veg. Loaded Pizza', price: '₹209', imgSrc: 'https://www.chaicafeteria.com/images/non_veg_loaded_pizza.webp' },
            { name: 'Cafeteria Spl. Non-Veg. Pizza', price: '₹269', imgSrc: 'https://www.chaicafeteria.com/images/spl_non_veg_pizza.webp' },
            { name: 'Customized Non-Veg. Pizza', price: '₹249', imgSrc: 'https://www.chaicafeteria.com/images/non_veg_pizza.webp' },
            { name: 'Egg Pizza (Boiled)', price: '₹149', imgSrc: 'https://www.chaicafeteria.com/images/boiled_egg_pizza.png' },
            { name: 'Fried Egg Pizza', price: '₹169', imgSrc: 'https://www.chaicafeteria.com/images/egg_pizza.webp' },
            { name: 'Extra Cheese', price: '₹30', imgSrc: 'https://www.chaicafeteria.com/images/extra_cheese.webp' },
        ],
    },
    sandwich: {
        name: 'Sandwiches',
        items: [
            { name: 'Chicken Sandwich', price: "₹129", imgSrc: 'https://www.chaicafeteria.com/images/chicken_sand.webp' },
            { name: 'Chicken Cheese Sandwich', price: "₹139", imgSrc: 'https://www.chaicafeteria.com/images/chicken_cheese_sand.webp' },
            { name: 'Egg Sandwich (Fried/Boiled)', price: "₹99/₹89", imgSrc: 'https://www.chaicafeteria.com/images/egg_sand.webp' },
            { name: 'Egg Cheese S/W (Fried/Boiled)', price: "₹129/₹119", imgSrc: 'https://www.chaicafeteria.com/images/egg_cheese_sand.webp' },
            { name: 'Cafeteria Spl. Paneer Sandwich', price: "₹119", imgSrc: 'https://www.chaicafeteria.com/images/paneer_sand.webp' },
            { name: 'Potato Sandwich', price: "₹49", imgSrc: 'https://www.chaicafeteria.com/images/potato_sand.webp' },
            { name: 'Paneer Haryali Sandwich', price: "₹109", imgSrc: 'https://www.chaicafeteria.com/images/hariyali_sand.png' },
            { name: 'Mushroom Sandwich', price: "₹109", imgSrc: 'https://www.chaicafeteria.com/images/mushroom_sand.webp' },
            { name: 'Paneer Tikka Sandwich', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/paneer_tikka_sand.webp' },
            { name: 'Cheese Corn Sandwich', price: "₹79", imgSrc: 'https://www.chaicafeteria.com/images/cheese_corn_sand.webp' },
            { name: 'Pizza Sandwich', price: "₹79", imgSrc: 'https://www.chaicafeteria.com/images/pizza_sand.webp' },
            { name: 'Cheese Grilled Sandwich', price: "₹59", imgSrc: 'https://www.chaicafeteria.com/images/cheese_grilled_sand.webp' },
            { name: 'Veggie Grilled Sandwich', price: "₹49", imgSrc: 'https://www.chaicafeteria.com/images/veggie_grilled_sand.webp' },
            { name: 'Extra Dip', price: "₹20", imgSrc: 'https://www.chaicafeteria.com/images/dip.webp' },
        ]
    },
    egg: {
        name: 'Egg Items',
        items: [
            { name: 'Boiled Egg (2 Pcs.)', price: "₹29", imgSrc: 'https://www.chaicafeteria.com/images/boiled_egg.webp' },
            { name: 'Omelette (2 Pcs.)', price: "₹39", imgSrc: 'https://www.chaicafeteria.com/images/omelette.webp' },
            { name: 'Pouch (2 Pcs.)', price: "₹39", imgSrc: 'https://www.chaicafeteria.com/images/egg_pouch.webp' },
            { name: 'Bread Omelette (Jumbo 2 Pcs.)', price: "₹49", imgSrc: 'https://www.chaicafeteria.com/images/bread_omelette.webp' },
        ]
    },
    shanghai: {
        name: 'Shanghai',
        items: [
            { name: 'Veg Shanghai', price: "H-₹79/ F-₹129", imgSrc: 'https://www.chaicafeteria.com/images/veg_shanghai.webp' },
            { name: 'Paneer Shanghai', price: "H-₹89/ F-₹139", imgSrc: 'https://www.chaicafeteria.com/images/paneer_shanghai.webp' },
            { name: 'Mushroom Shanghai', price: "H-₹89/ F-₹139", imgSrc: 'https://www.chaicafeteria.com/images/mushroom_shanghai.webp' },
            { name: 'Veg Mix Shanghai', price: "H-₹99/ F-₹149", imgSrc: 'https://www.chaicafeteria.com/images/veg_mix_shanghai.webp' },
            { name: 'Egg Shanghai', price: "H-₹79/ F-₹149", imgSrc: 'https://www.chaicafeteria.com/images/egg_shanghai.webp' },
            { name: 'Chicken Shanghai', price: "H-₹99/ F-₹179", imgSrc: 'https://www.chaicafeteria.com/images/chicken_shanghai.webp' },
            { name: 'Non-Veg Mix Shanghai', price: "H-₹119/ F-₹199", imgSrc: 'https://www.chaicafeteria.com/images/non_veg_mix_shanghai.webp' },
        ]
    },
    chowmein: {
        name: 'Chowmein',
        items: [
            { name: 'Veg Chowmein', price: "H-₹49/ F-₹89", imgSrc: 'https://www.chaicafeteria.com/images/veg_chowmein.webp' },
            { name: 'Paneer Chowmein', price: "H-₹59/ F-₹99", imgSrc: 'https://www.chaicafeteria.com/images/paneer_chowmein.webp' },
            { name: 'Mushroom Chowmein', price: "H-₹69/ F-₹109", imgSrc: 'https://www.chaicafeteria.com/images/mushroom_chowmein.webp' },
            { name: 'Veg Mix Chowmein', price: "H-₹79/ F-₹119", imgSrc: 'https://www.chaicafeteria.com/images/veg_mix_chowmein.webp' },
            { name: 'Egg Chowmein', price: "H-₹69/ F-₹129", imgSrc: 'https://www.chaicafeteria.com/images/egg_chowmein.webp' },
            { name: 'Chicken Chowmein', price: "H-₹89/ F-₹169", imgSrc: 'https://www.chaicafeteria.com/images/Chicken_Chowmein.webp' },
            { name: 'Mix Chowmein (Non-Veg)', price: "H-₹99/ F-₹189", imgSrc: 'https://www.chaicafeteria.com/images/mix_non_veg_chowmein.webp' },
        ]
    },
    rice: {
        name: 'Fried Rice',
        items: [
            { name: 'Veg Fried Rice', price: "H-₹69/ F-₹119", imgSrc: 'https://www.chaicafeteria.com/images/veg_fried_rice.webp' },
            { name: 'Paneer Fried Rice', price: "H-₹79/ F-₹129", imgSrc: 'https://www.chaicafeteria.com/images/paneer_fried_rice.webp' },
            { name: 'Mushroom Fried Rice', price: "H-₹79/ F-₹129", imgSrc: 'https://www.chaicafeteria.com/images/mushroom_fried_rice.webp' },
            { name: 'Mix Veg Fried Rice', price: "H-₹89/ F-₹139", imgSrc: 'https://www.chaicafeteria.com/images/mix_veg_fried_rice.webp' },
            { name: 'Egg Fried Rice', price: "H-₹79/ F-₹149", imgSrc: 'https://www.chaicafeteria.com/images/egg_fried_rice.webp' },
            { name: 'Chicken Fried Rice', price: "H-₹89/ F-₹159", imgSrc: 'https://www.chaicafeteria.com/images/chicken_fried_rice.webp' },
            { name: 'Chicken Egg Fried Rice', price: "H-₹99/ F-₹169", imgSrc: 'https://www.chaicafeteria.com/images/chicken_egg_fried_rice.webp' },
        ]
    },
    sprouts: {
        name: 'Sprouts',
        items: [
            { name: 'Mix Sprouts', price: "₹59", imgSrc: 'https://www.chaicafeteria.com/images/mix_sprouts.webp' },
            { name: 'Mix Masala Sprouts', price: "₹79", imgSrc: 'https://www.chaicafeteria.com/images/mix_masala_sprouts.webp' },
            { name: 'Steamed Mix Masala Sprouts', price: "₹99", imgSrc: 'https://www.chaicafeteria.com/images/steamed_mix_sprouts.webp' },
            { name: 'Chana Sprouts', price: "₹39", imgSrc: 'https://www.chaicafeteria.com/images/chana_sprouts.webp' },
            { name: 'Chana Masala Sprouts', price: "₹49", imgSrc: 'https://www.chaicafeteria.com/images/chana_masala_sprouts.webp' },
            { name: 'Steamed Chana Masala Sprouts', price: "₹59", imgSrc: 'https://www.chaicafeteria.com/images/steamed_chana_sprouts.webp' },
            { name: 'Chana Mong Sprouts', price: "₹49", imgSrc: 'https://www.chaicafeteria.com/images/chana_mong_sprouts.webp' },
            { name: 'Chana Mong Masala Sprouts', price: "₹59", imgSrc: 'https://www.chaicafeteria.com/images/chana_mong_masala_sprouts.webp' },
            { name: 'Make your own sprouts', price: "₹79", imgSrc: 'https://www.chaicafeteria.com/images/custom_sprouts.webp' },
        ]
    },
    biryani: {
        name: 'Biryani',
        items: [
            { name: 'Paneer Biryani (500g)', price: "₹169", imgSrc: 'https://www.chaicafeteria.com/images/paneer_mushroom_biryani.webp' },
            { name: 'Paneer Capsicum', price: "₹149", imgSrc: 'https://www.chaicafeteria.com/images/paneer_capsicum_biryani.webp' },
            { name: 'Veg Biryani (500g)', price: "₹149", imgSrc: 'https://www.chaicafeteria.com/images/veg_biryani.webp' },
            { name: 'Soya Biryani (500g)', price: "₹169", imgSrc: 'https://www.chaicafeteria.com/images/soya_biryani.webp' },
            { name: 'Egg Biryani (500g)', price: "₹199", imgSrc: 'https://www.chaicafeteria.com/images/egg_biryani.webp' },
            { name: 'Chicken Biryani (500g)', price: "₹249", imgSrc: 'https://www.chaicafeteria.com/images/chicken_biryani.webp' },
            { name: 'Paneer 65 Biryani (500g)', price: "₹199", imgSrc: 'https://www.chaicafeteria.com/images/chicken_egg_biryani.webp' },
        ]
    },
    beverages: {
        name: 'Beverages (Summer)',
        items: [
            { name: 'Desi Drink (Sattu)', price: "₹39", imgSrc: '/images/sattu.webp' },
            { name: 'Choice of Fresh Juice', price: "₹69-89", imgSrc: '/images/fresh_juice.webp' },
            { name: 'Fresh Lassi', price: "₹69", imgSrc: 'https://www.chaicafeteria.com/images/lassi.webp' },
            { name: 'Fresh Chhachh', price: "₹69", imgSrc: 'https://www.chaicafeteria.com/images/chhachh.webp' },
            { name: 'Cold Coffee', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/cold_coffee.webp' },
            { name: 'Mango Lassi', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/mango_lassi.webp' },
            { name: 'Oreo/KitKat/Vanila Shake', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/oreo_shake.webp' },
            { name: 'Mango/Banana/Papaya Shake', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/fruit_shake.webp' },
            { name: 'Ice-cream (any flavour) Shake', price: "₹99", imgSrc: 'https://www.chaicafeteria.com/images/icecream_shake.webp' },
            { name: 'Masala/Pudina Sikanji', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/shikanji.webp' },
            { name: 'W.melon/G.Apple/Mango Mojito', price: "₹99", imgSrc: 'https://www.chaicafeteria.com/images/mojito.webp' },
            { name: 'Virgin Mojito', price: "₹79", imgSrc: 'https://www.chaicafeteria.com/images/virgin_mojito.webp' },
            { name: 'Blue Lagoon', price: "₹99", imgSrc: 'https://www.chaicafeteria.com/images/blue_lagoon.webp' },
        ]
    },
    beverages_2: {
        name: 'Beverages (Hot)',
        items: [
            { name: 'Khulhad Chai', price: "₹19", imgSrc: 'https://www.chaicafeteria.com/images/tea.webp' },
            { name: 'Green Tea', price: "₹39", imgSrc: 'https://www.chaicafeteria.com/images/green_tea.webp' },
            { name: 'Lemon Grass Tea', price: "₹29", imgSrc: 'https://www.chaicafeteria.com/images/lemon_grass.webp' },
            { name: 'Coffee (S)', price: "₹19", imgSrc: 'https://www.chaicafeteria.com/images/coffee.webp' },
            { name: 'Cafeteria Spl. Coffee', price: "₹29", imgSrc: 'https://www.chaicafeteria.com/images/coffee_2.webp' },
            { name: 'Black Coffee', price: "₹25", imgSrc: 'https://www.chaicafeteria.com/images/black_coffee.webp' },
            { name: 'Hot Chocolate', price: "₹69", imgSrc: 'https://www.chaicafeteria.com/images/hot_chocolate.webp' },
            { name: 'Horlicks Milk', price: "₹69", imgSrc: 'https://www.chaicafeteria.com/images/horlicks_milk.png' },
        ]
    },
    muffins: {
        name: 'Muffins',
        items: [
            { name: 'Walnut Brownie Muffin', imgSrc: 'https://www.chaicafeteria.com/images/walnut_brownie_muffins.webp' },
            { name: 'Pista Vanilla Muffin', imgSrc: 'https://www.chaicafeteria.com/images/pista_vanilla_muffins.webp' },
            { name: 'Cranberry Muffin', imgSrc: 'https://www.chaicafeteria.com/images/cranberry_muffins.webp' },
            { name: 'Butterscotch Muffin', imgSrc: 'https://www.chaicafeteria.com/images/butterscotch_muffins.webp' },
            { name: 'Cashew & Almonds Muffin', imgSrc: 'https://www.chaicafeteria.com/images/cashew_almonds_muffins.webp' },
        ]
    },
    cookies: {
        name: 'Cookies',
        items: [
            { name: 'Mangrella Cookies', imgSrc: 'https://www.chaicafeteria.com/images/mangrella_cookies.webp' },
            { name: 'Jam Treats Cookies', imgSrc: 'https://www.chaicafeteria.com/images/jam_treats_cookies.webp' },
            { name: 'Jeera Cookies', imgSrc: 'https://www.chaicafeteria.com/images/jeera_cookies.webp' },
            { name: 'Elaichi Cookies', imgSrc: 'https://www.chaicafeteria.com/images/elaichi_cookies.webp' },
            { name: 'Ajwain Cookies', imgSrc: 'https://www.chaicafeteria.com/images/ajwain_cookies.webp' },
            { name: 'Coconut Cookies', imgSrc: 'https://www.chaicafeteria.com/images/coconut_cookies.webp' },
            { name: 'Butter Atta Cookies', imgSrc: 'https://www.chaicafeteria.com/images/butter_atta_cookies.webp' },
        ]
    },
    fries: {
        name: 'Fries',
        items: [
            { name: 'Chicken Popcorn (10 Pcs.)', price: "₹99", imgSrc: 'https://www.chaicafeteria.com/images/chicken_popcorn.webp' },
            { name: 'Chicken Nuggets (8 Pcs.)', price: "₹99", imgSrc: 'https://www.chaicafeteria.com/images/chicken_nuggets.webp' },
            { name: 'Chilli Garlic Potato (10 Pcs.)', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/chilli_garlic_potato.webp' },
            { name: 'Mixed Platter (10 Pcs.)', price: "₹139", imgSrc: 'https://www.chaicafeteria.com/images/mixed_platter.png' },
            { name: 'Chicken Sausage Deep Fried (5 Pcs.)', price: "₹129", imgSrc: 'https://www.chaicafeteria.com/images/chicken_sausage_deep_fried.webp' },
            { name: 'Chicken Sausage Steamed (5 Pcs.)', price: "₹119", imgSrc: 'https://www.chaicafeteria.com/images/chicken_sausage_steamed.webp' },
            { name: 'Chicken Sausage Pan Fried (5 Pcs.)', price: "₹139", imgSrc: 'https://www.chaicafeteria.com/images/chicken_sausage_pan_fried.webp' },
            { name: 'French Fries', price: "₹79", imgSrc: 'https://www.chaicafeteria.com/images/french_fries.webp' },
            { name: 'Cheese French Fries', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/cheese_french_fries.webp' },
            { name: 'Peri-Peri Fries', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/peri_peri_fries.webp' },
        ]
    },
    soup: {
        name: 'Soup',
        items: [
            { name: 'Chicken Delight Soup', price: "₹89", imgSrc: 'https://www.chaicafeteria.com/images/chicken_soup.webp' },
            { name: 'Creamy Chicken Soup', price: "₹99", imgSrc: 'https://www.chaicafeteria.com/images/creamy_chicken_soup.png' },
            { name: 'Mushroom Soup', price: "₹69", imgSrc: 'https://www.chaicafeteria.com/images/mushroom_soup.webp' },
            { name: 'Creamy Mushroom Soup', price: "₹79", imgSrc: 'https://www.chaicafeteria.com/images/creamy_mushroom_soup.webp' },
            { name: 'Sweet Corn Vegetable Soup', price: "₹59", imgSrc: 'https://www.chaicafeteria.com/images/sweet_corn_vege_soup.webp' },
            { name: 'Tomato Soup', price: "₹59", imgSrc: 'https://www.chaicafeteria.com/images/tomato_soup.webp' },
            { name: 'Manchow Noodles', price: "₹69", imgSrc: '/images/manchow_noodles.png' },
        ]
    },
    thali: {
        name: 'Thali',
        items: [
            { name: 'Veg Thali', price: "₹139", imgSrc: 'https://www.chaicafeteria.com/images/thali_veg.png' },
            { name: 'CS Thali', price: "₹199", imgSrc: 'https://www.chaicafeteria.com/images/thali_veg_cs.png' },
            { name: 'Non Veg Thali', price: "₹189", imgSrc: 'https://www.chaicafeteria.com/images/thali_non_veg.png' },
            { name: 'CS Non Veg Thali', price: "₹259", imgSrc: 'https://www.chaicafeteria.com/images/thali_non_veg_cs.png' },
            { name: 'Egg Thali', price: "₹169", imgSrc: 'https://www.chaicafeteria.com/images/thali_egg.png' },
            { name: 'CS Egg Thali', price: "₹239", imgSrc: 'https://www.chaicafeteria.com/images/thali_egg_cs.png' },
        ]
    },
};

// --- MENU COMPONENT ---
const parsePrice = (priceStr) => {
    if (!priceStr) return [];
    if (!priceStr.includes('/')) return [{ label: 'Standard', price: priceStr }];
    return priceStr.split('/').map(part => {
        const trimmed = part.trim();
        if (trimmed.includes('-')) {
            const [label, price] = trimmed.split('-');
            let fullLabel = label.trim();
            if (fullLabel === 'H') fullLabel = 'Half';
            if (fullLabel === 'F') fullLabel = 'Full';
            return { label: fullLabel, price: price.trim() };
        }
        return { label: '', price: trimmed };
    });
};

const Menu = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeCategory, setActiveCategory] = useState(Object.keys(menuData)[0]);
    const [expanded, setExpanded] = useState(false);
    const COLLAPSE_COUNT = 4;
    const catScrollRef = React.useRef(null);
    const menuImagesUrl = React.useMemo(() => {
        if (typeof window !== 'undefined') {
            return `${window.location.origin}/menu-images`;
        }
        return '/menu-images';
    }, []);

    const scrollCats = (dir) => {
        const el = catScrollRef.current;
        if (!el) return;
        const amount = Math.floor((el.clientWidth || 280) * 0.9);
        el.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };

    // Collapse again when switching category (all viewports)
    React.useEffect(() => {
        setExpanded(false);
    }, [activeCategory]);

    return (
        <div className="relative min-h-screen bg-[#FFFBF2] text-[#333333]">
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(230,99,40,0.12)] via-[rgba(253,189,38,0.06)] to-transparent pointer-events-none" />
            <div className="relative z-10 container mx-auto px-4 py-12">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-black">Our Menu</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Deliciously crafted, just for you. Explore our range of popular dishes and find your new favorite.
                    </p>
                </motion.div>

                {/* --- QR: Scan to view menu images --- */}
                <div className="mb-8 flex justify-center md:justify-center">
                    <div className="flex items-center gap-4 bg-white rounded-2xl shadow p-4 border border-black/5">
                        <div className="bg-white p-2 rounded-lg shadow">
                            <QRCode value={menuImagesUrl} size={96} level="H" />
                        </div>
                        <div className="text-left">
                            <div className="text-sm font-bold text-[#333333]">Scan to view Menu Images</div>
                            <a href="/menu-images" className="text-sm text-brand-primary underline underline-offset-4">Open menu images</a>
                        </div>
                    </div>
                </div>

                {/* --- CATEGORY TABS (slider on all viewports) --- */}
                <div className="relative mb-12">
                    {/* Scrollable rail: visible on all sizes */}
                    <div
                        ref={catScrollRef}
                        className="flex gap-3 overflow-x-auto scrollbar-none snap-x snap-mandatory px-16"
                        style={{ scrollPaddingLeft: '4rem', scrollPaddingRight: '4rem' }}
                    >
                        <div aria-hidden className="shrink-0 w-16" />
                        {Object.entries(menuData).map(([key, category]) => {
                            const isActive = activeCategory === key;
                            const Icon = categoryIcons[key] || MdFastfood;
                            return (
                                <motion.button
                                    key={key}
                                    onClick={() => setActiveCategory(key)}
                                    className={`shrink-0 snap-start hover:cursor-pointer relative flex items-center justify-center px-5 py-3 text-sm md:text-base font-bold rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E66328] shadow-sm ${
                                        isActive ? 'text-white' : 'bg-whitenpm  text-gray-700'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-[#FBBE25] rounded-full"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center whitespace-nowrap">
                                        <span
                                            className="mr-2 inline-flex items-center justify-center w-7 h-7 rounded-full"
                                            style={{ backgroundColor: isActive ? '#E66328' : '#F2E6E0' }}
                                        >
                                            <Icon className="text-white" size={16} />
                                        </span>
                                        {category.name}
                                    </span>
                                </motion.button>
                            );
                        })}
                        <div aria-hidden className="shrink-0 w-16" />
                    </div>

                    {/* Chevrons + edge fades container (all sizes) */}
                    <div className="pointer-events-none absolute inset-y-0 inset-x-0">
                        {/* Fades: z-20 (Top layer) */}
                        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#FFFBF2] to-transparent z-20" />
                        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#FFFBF2] to-transparent z-20" />

                        {/* Arrows: z-10 (Middle layer) */}
                        <button
                            type="button"
                            onClick={() => scrollCats(-1)}
                            className="pointer-events-auto absolute left-3 top-1/2 -translate-y-1/2 bg-[#E66328] text-white rounded-full shadow-lg p-2 ring-1 ring-white/80 z-10"
                            aria-label="Scroll categories left"
                        >
                            <IoChevronBack size={20} />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollCats(1)}
                            className="pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2 bg-[#E66328] text-white rounded-full shadow-lg p-2 ring-1 ring-white/80 z-10"
                            aria-label="Scroll categories right"
                        >
                            <IoChevronForward size={20} />
                        </button>
                    </div>
                </div>
                
                {/* Collapse toggle (all viewports) */}
                {menuData[activeCategory].items.length > COLLAPSE_COUNT && (
                    <div className="flex justify-end mb-4">
                        <button
                            type="button"
                            onClick={() => setExpanded((v) => !v)}
                            className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-full bg-white shadow border border-gray-200"
                            aria-expanded={expanded}
                            aria-controls="menu-items-grid"
                        >
                            <span>{expanded ? 'Show less' : `Show all (${menuData[activeCategory].items.length})`}</span>
                            <IoChevronDown className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <div
                            id="menu-items-grid"
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {(!expanded
                                ? menuData[activeCategory].items.slice(0, COLLAPSE_COUNT)
                                : menuData[activeCategory].items
                            ).map((item, index) => (
                                <motion.div
                                    layoutId={`card-${item.name}`}
                                    onClick={() => setSelectedItem(item)}
                                    key={item.name}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group cursor-pointer"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <div className="overflow-hidden h-44 md:h-48">
                                        <img
                                            loading='lazy'
                                            src={item.imgSrc}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                        />
                                    </div>
                                    <div className="p-5 flex-grow flex flex-row items-center justify-between gap-2">
                                        <h3 className="text-xl font-bold text-[#333333] truncate min-w-0">{item.name}</h3>
                                        <p className="text-lg font-semibold text-[#E66328] whitespace-nowrap flex-shrink-0">{item.price}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedItem(null)}
                        >
                            <motion.div
                                layoutId={`card-${selectedItem.name}`}
                                className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                                >
                                    <IoClose size={24} />
                                </button>
                                
                                <div className="h-64 w-full">
                                    <img
                                        src={selectedItem.imgSrc}
                                        alt={selectedItem.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedItem.name}</h3>
                                    
                                    <div className="space-y-3">
                                        {parsePrice(selectedItem.price).map((p, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-3 bg-orange-50 rounded-xl border border-orange-100">
                                                <span className="font-semibold text-gray-700">{p.label || 'Price'}</span>
                                                <span className="text-xl font-bold text-[#E66328]">{p.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Menu;