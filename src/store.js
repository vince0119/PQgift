import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vue.Store({
    state: {
        Fasionable: [
            { key: "Fasionable", image: 'image/Brocade crossbody bag ver1.png', name: "Brocade crossbody bag ver1", price: "₫169.000" },
            { key: "Fasionable", image: 'image/Brocade crossbody bag ver2.jpg', name: "Brocade crossbody bag ver2", price: "₫259.000" },
            { key: "Fasionable", image: 'image/Chrysanthemum sedge bag.jpg', name: "Chrysanthemum sedge bag", price: "₫509.000" },
            { key: "Fasionable", image: 'image/Knitting bag.PNG', name: "Knitting bag", price: "₫129.000" },
            { key: "Fasionable", image: 'image/sedge basket.jpg', name: "sedge basket", price: "₫119.000" },
            { key: "Fasionable", image: 'image/Crossbody bag.jpg', name: "Crossbody bag", price: "₫129.000" },
        ],

        Hat: [
            { key: "Hat", image: 'image/Black bow hat ver1.jpg', name: "Black bow hat ver1", price: "₫69.000" },
            { key: "Hat", image: 'image/Black bow hat ver2.jpg', name: "Black bow hat ver2", price: "₫569.000" },
            { key: "Hat", image: 'image/Black bow hat ver3.jpg', name: "Black bow hat ver3", price: "₫769.000" },
            { key: "Hat", image: 'image/Brown bow hat ver1.PNG', name: "Black bow hat ver1", price: "₫159.000" },
            { key: "Hat", image: 'image/Brown bow hat ver2.jpg', name: "Brown bow hat ver2", price: "₫269.000" },
            { key: "Hat", image: 'image/Brown bow hat ver3.PNG', name: "Brown bow hat ver3", price: "₫289.000" },
            { key: "Hat", image: 'image/Brown bow hat ver4.jpg', name: "Brown bow hat ver4", price: "₫939.000" },
            { key: "Hat", image: 'image/Dark green hat.PNG', name: "Dark green hat", price: "₫589.000" },
            { key: "Hat", image: 'image/Light green hat.PNG', name: "Light green hat", price: "₫258.000" },
            { key: "Hat", image: 'image/Pink hat.PNG', name: "Pink hat", price: "₫357.000" },
            { key: "Hat", image: 'image/Trible Hat.PNG', name: "Trible Hat", price: "₫267.000" },
            { key: "Hat", image: 'image/White bow hat.PNG', name: "White bow hat", price: "₫264.000" },
        ],

        Jewels: [
            { key: "Jewels", image: 'image/Clamshell silver bracelet.png', name: "Clamshell silver bracelet", price: "₫514.000" },
            { key: "Jewels", image: 'image/Pearl bracelet.png', name: "Pearl bracelet", price: "₫362.000" },
            { key: "Jewels", image: 'image/pearl earrings.jpg', name: "pearl earrings", price: "₫605.000" },
            { key: "Jewels", image: 'image/Pearl jewelry set ver1.jpg', name: "Pearl jewelry set ver1", price: "₫36.000" },
            { key: "Jewels", image: 'image/Pearl jewelry set ver2.jpg', name: "Pearl jewelry set ver2", price: "₫32.000" },
            { key: "Jewels", image: 'image/Pearl Ring ver1.jpg', name: "Pearl Ring ver1", price: "₫256.000" },
            { key: "Jewels", image: 'image/Pearl Ring ver2.jpg', name: "Pearl Ring ver2.jpg", price: "₫380.000" },
            { key: "Jewels", image: 'image/Pearl Ring ver3.jpg', name: "Pearl Ring ver3.jpg", price: "₫91.000" },
            { key: "Jewels", image: 'image/Seashell bracelet ver1.jpg', name: "Seashell bracelet ver1", price: "₫93.000" },
            { key: "Jewels", image: 'image/seashell bracelet ver2.jpg', name: "seashell bracelet ver2", price: "₫76.000" },
        ],

        Keychain: [
            { key: "Keychain", image: 'image/Dolphin pearl keychain .PNG', name: "Dolphin pearl keychain", price: "₫60.000" },
            { key: "Keychain", image: 'image/sea turtle pearl keychain.PNG', name: "sea turtle pearl keychain", price: "₫34.000" },
            { key: "Keychain", image: 'image/Seahorse pearl keychain.PNG', name: "Seahorse pearl keychain", price: "₫31.000" },
            { key: "Keychain", image: 'image/seashell starfish keychain .PNG', name: "seashell starfish keychain", price: "₫28.000" },
            { key: "Keychain", image: 'image/shell pearl keychain ver1.PNG', name: "shell pearl keychain ver1", price: "₫335.000" },
            { key: "Keychain", image: 'image/shell pearl keychain ver2.PNG', name: "shell pearl keychain ver2", price: "₫693.000" },
            { key: "Keychain", image: 'image/starfish keychain.jpg', name: "starfish keychain", price: "₫368.000" },
            { key: "Keychain", image: 'image/starfish pearl keychain .PNG', name: "starfish pearl keychain", price: "₫315.000" },
            { key: "Keychain", image: 'image/white star keychain .jpg', name: "white star keychain", price: "₫986.000" },
        ],

        Specialties: [
            { key: "Specialties", image: 'image/Ancohol.png', name: "Ancohol", price: "₫682.000" },
            { key: "Specialties", image: 'image/Black ancohol.jpeg', name: "Black ancohol", price: "₫365.000" },
            { key: "Specialties", image: 'image/Dried ink.jpg', name: "Dried ink", price: "₫952.000" },
            { key: "Specialties", image: 'image/Dried sage.jpg', name: "Dried sage", price: "₫687.000" },
            { key: "Specialties", image: 'image/Squid rolls.PNG', name: "Squid rolls", price: "₫65.000" },
            { key: "Specialties", image: 'image/Vang ancohol.jpg', name: "Vang ancohol", price: "₫20.000" },
        ],

        cartProducts: [],
        currentProduct: {},
    },
    getters: {
        getFasionable: state => state.Fasionable,
        getHat: state => state.Hat,
        getJewels: state => state.Jewels,
        getKeychain: state => state.Keychain,
        getSpecialties: state => state.Specialties,
        getProductInCart: state => state.cartProducts,
        getCurrentProduct: state => state.currentProduct,
    },
    mutations: {
        ADD_PRODUCT: (state, product) => {
            state.cartProducts.push(product);
        },
        CURRENT_PRODUCT: (state, product) => {
            state.currentProduct = product;
        },
    },
    actions: {
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
        },
        currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
        },
    }
})