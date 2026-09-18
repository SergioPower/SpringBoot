package com.sguzman.facturacion.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sguzman.facturacion.dao.IClienteDao;
import com.sguzman.facturacion.dao.IFacturaDao;
import com.sguzman.facturacion.dao.IProductoDao;
import com.sguzman.facturacion.entity.Cliente;
import com.sguzman.facturacion.entity.Factura;
import com.sguzman.facturacion.entity.Producto;

@Service 
public class ClienteServiceImpl implements ClienteService {

   private final IClienteDao clienteDao;

	private final IProductoDao productoDao;

	private final IFacturaDao facturaDao;


    ClienteServiceImpl(IClienteDao clienteDao, IFacturaDao facturaDao, IProductoDao productoDao) {
        this.clienteDao = clienteDao;
        this.facturaDao = facturaDao;
        this.productoDao = productoDao;
    }

 

    @Override
    @Transactional(readOnly = true)
    public List<Cliente> findAll() {
        return (List<Cliente>) clienteDao.findAll();
    }

    @Override
    @Transactional
    public void save(Cliente cliente) {
        clienteDao.save(cliente);

    }

    @Override
    @Transactional(readOnly = true)
    public Cliente findOne(Long id) {
        return clienteDao.findById(id).orElse(null);
    }

    @Override
    @Transactional(readOnly = true)
    public Cliente fetchByIdWithFacturas(Long id) {
        return clienteDao.fetchByIdWithFacturas(id);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        clienteDao.deleteById(id);

    }

    @Override
    @Transactional(readOnly = true)
    public Page<Cliente> findAll(Pageable pageable) {
        return clienteDao.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Producto> findByNombre(String term) {
        return productoDao.findByNombreLikeIgnoreCase("%" + term + "%");
    }

    @Override
    @Transactional
    public void saveFactura(Factura factura) {
        facturaDao.save(factura);
    }

    @Override
    @Transactional(readOnly = true)
    public Producto findProductoById(Long id) {
        return productoDao.findById(id).orElse(null);
    }

    @Override
    @Transactional(readOnly = true)
    public Factura findFacturaById(Long id) {
        return facturaDao.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public void deleteFactura(Long id) {
        facturaDao.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Factura fetchFacturaByIdWithClienteWhithItemFacturaWithProducto(Long id) {
        return facturaDao.fetchByIdWithClienteWhithItemFacturaWithProducto(id);
    }

}
