import { ProductsCategoriesType } from "../types/ProductCategoriesType";
import { ProductType } from "../types/ProductType";

export const productsData: ProductType[] = [
    // Frutas
    { id: "id3", name: "Maça", price: 4.00, reserva: false, qtd: 0, imagePath: 'https://plus.unsplash.com/premium_photo-1667049292983-d2524dd0ef08?q=80&w=1749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'frutas' },
    { id: "id2", name: "Melancia", price: 12.00, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1621961048737-a9993789e1ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'frutas' },
    { id: "id21", name: "Uva", price: 10.00, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1578829779691-99b60bd8c7be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhcGV8ZW58MHx8MHx8fDA%3D', category: 'frutas' },
    { id: "id5", name: "Abacate", price: 8.00, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1583029901628-8039767c7ad0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'frutas' },
    { id: "id4", name: "Tomate", price: 8.50, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'frutas' },

    // Verduras
    { id: "id6", name: "Alface", price: 2.50, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1629318682484-e77bbbdf8283?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'verduras' },
    { id: "id7", name: "Brócolis", price: 3.50, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1628773822990-202aed1e567e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'verduras' },
    { id: "id8", name: "Espinafre", price: 4.00, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'verduras' },
    { id: "id9", name: "Pepino", price: 2.20, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'verduras' },
    { id: "id10", name: "Rúcula", price: 3.00, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1595755973454-6f57c3ece624?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'verduras' },

    // Legumes
    { id: "id1", name: "Batata", price: 9.99, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'legumes' },
    { id: "id11", name: "Cenoura", price: 2.00, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1582515073490-39981397c445?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'legumes' },
    { id: "id12", name: "Batata-doce", price: 3.50, reserva: true, qtd: 0, imagePath: 'https://plus.unsplash.com/premium_photo-1675365780148-a00379c54123?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'legumes' },
    { id: "id13", name: "Abóbora", price: 4.00, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1509622905150-fa66d3906e09?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'legumes' },
    { id: "id14", name: "Berinjela", price: 2.50, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1605197378540-10ebaf6999e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'legumes' },
    { id: "id15", name: "Chuchu", price: 2.20, reserva: false, qtd: 0, imagePath: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSZ46ig5JwiMFLi2xw7L73DlMqh_P0lyWOakbn7Wu7tl2gUkV2VEqBp5IeMfgr6OYTD9D1u-vMcGnsMlB3MHBo', category: 'legumes' },

    // Temperos
    { id: "id16", name: "Cebola", price: 1.50, reserva: false, qtd: 0, imagePath: 'https://plus.unsplash.com/premium_photo-1675365457886-ea3e37100a68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'temperos' },
    { id: "id17", name: "Alho", price: 2.00, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'temperos' },
    { id: "id18", name: "Salsinha", price: 1.80, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1588879460618-9249e7d947d1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'temperos' },
    { id: "id19", name: "Cebolinha", price: 1.80, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1602769515559-e15133a7e992?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'temperos' },
    { id: "id20", name: "Manjericão", price: 2.20, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1558070510-504a0db43997?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'temperos' },
];

export const productsCategoriesData: ProductsCategoriesType[] = [
    {
        name: "Frutas",
        products: [
            { id: "id3", name: "Maça", price: 4.00, reserva: false, qtd: 0, imagePath: 'https://plus.unsplash.com/premium_photo-1667049292983-d2524dd0ef08?q=80&w=1749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'frutas' },
            { id: "id2", name: "Melancia", price: 12.00, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1621961048737-a9993789e1ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'frutas' },
            { id: "id21", name: "Uva", price: 10.00, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1578829779691-99b60bd8c7be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhcGV8ZW58MHx8MHx8fDA%3D', category: 'frutas' },
            { id: "id5", name: "Abacate", price: 8.00, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1583029901628-8039767c7ad0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'frutas' },
            { id: "id4", name: "Tomate", price: 8.50, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'frutas' },
        ]
    },
    {
        name: "Verduras",
        products: [
            { id: "id6", name: "Alface", price: 2.50, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1629318682484-e77bbbdf8283?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'verduras' },
            { id: "id7", name: "Brócolis", price: 3.50, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1628773822990-202aed1e567e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'verduras' },
            { id: "id8", name: "Espinafre", price: 4.00, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'verduras' },
            { id: "id9", name: "Pepino", price: 2.20, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'verduras' },
            { id: "id10", name: "Rúcula", price: 3.00, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1595755973454-6f57c3ece624?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'verduras' },
        ]
    },
    {
        name: "Legumes",
        products: [
            { id: "id1", name: "Batata", price: 9.99, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'legumes' },
            { id: "id11", name: "Cenoura", price: 2.00, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1582515073490-39981397c445?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'legumes' },
            { id: "id12", name: "Batata-doce", price: 3.50, reserva: true, qtd: 0, imagePath: 'https://plus.unsplash.com/premium_photo-1675365780148-a00379c54123?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'legumes' },
            { id: "id13", name: "Abóbora", price: 4.00, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1509622905150-fa66d3906e09?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'legumes' },
            { id: "id14", name: "Berinjela", price: 2.50, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1605197378540-10ebaf6999e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'legumes' },
            { id: "id15", name: "Chuchu", price: 2.20, reserva: false, qtd: 0, imagePath: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSZ46ig5JwiMFLi2xw7L73DlMqh_P0lyWOakbn7Wu7tl2gUkV2VEqBp5IeMfgr6OYTD9D1u-vMcGnsMlB3MHBo', category: 'legumes' },
        ]
    },
    {
        name: "Temperos",
        products: [
            { id: "id16", name: "Cebola", price: 1.50, reserva: false, qtd: 0, imagePath: 'https://plus.unsplash.com/premium_photo-1675365457886-ea3e37100a68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'temperos' },
            { id: "id17", name: "Alho", price: 2.00, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'temperos' },
            { id: "id18", name: "Salsinha", price: 1.80, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1588879460618-9249e7d947d1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'temperos' },
            { id: "id19", name: "Cebolinha", price: 1.80, reserva: true, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1602769515559-e15133a7e992?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'temperos' },
            { id: "id20", name: "Manjericão", price: 2.20, reserva: false, qtd: 0, imagePath: 'https://images.unsplash.com/photo-1558070510-504a0db43997?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'temperos' },
        ]
    },
];
