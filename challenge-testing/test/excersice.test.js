const CarritoCompra = require("../index.js")

describe("clase CarritoCompra",()=>
{
    const carrito =new CarritoCompra();
    const producto1 = {nombre: "producto1", precio: 10}
    const producto2 = {nombre: "producto2", precio: 20}
    console.log(carrito.productos);
    it("carritoes una clase",()=>{
        expect(typeof CarritoCompra).toBe("function");
    })
    it("productos array vacio",()=>{
        expect(carrito.productos).toEqual([]);
        expect(carrito.productos.length).toBe(0);
    })
    it("agregar productos anda",()=>{
        carrito.agregarProducto(producto1);
        expect(carrito.productos.length).toBe(1);
        expect(carrito.productos[0]).toEqual(producto1);   
        carrito.agregarProducto(producto2);
        expect(carrito.productos.length).toBe(2);
        expect(carrito.productos[1]).toEqual(producto2);
    })

    it("calcular total",()=>{
        expect(carrito.calcularTotal()).toBe(30);

    })
    it("aplica Descuento",()=>{
    expect(carrito.aplicarDescuento(50)).toBe(15);
    })
})