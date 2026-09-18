package com.sguzman.facturacion.service;

import java.util.List;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.sguzman.facturacion.entity.Cliente;
import com.sguzman.facturacion.entity.Factura;
import com.sguzman.facturacion.entity.Producto;

public interface ClienteService {

    public List<Cliente> findAll();

    public Page<Cliente> findAll(Pageable pageable);

    public void save(Cliente cliente);

    public Cliente findOne(Long id);

    public Cliente fetchByIdWithFacturas(Long id);

    public void delete(Long id);

    public List<Producto> findByNombre(String term);

    public void saveFactura(Factura factura);

    public Producto findProductoById(Long id);

    public Factura findFacturaById(Long id);

    public void deleteFactura(Long id);

    public Factura fetchFacturaByIdWithClienteWhithItemFacturaWithProducto(Long id);

}
