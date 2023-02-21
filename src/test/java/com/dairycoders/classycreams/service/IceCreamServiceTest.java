package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.entity.IceCream;
import com.dairycoders.classycreams.entity.enums.IceCreamType;
import com.dairycoders.classycreams.repository.IceCreamRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class IceCreamServiceTest {
    @Autowired
    private IceCreamService iceCreamService;

    @Autowired
    private IceCreamRepository iceCreamRepository;
    @BeforeEach
    void setUp() {
        IceCream iceCream = new IceCream();
        iceCream.setName("Vanilla");
        iceCream.setDescription("Vanilla ice cream");
        iceCream.setType(IceCreamType.HARDSCOOPED);
        iceCream.setImageUrl("https://classycreams.com/vanilla.jpg");
        iceCream.setBasePrice(1.99);
        iceCream.setCalories(250);

        iceCreamRepository.save(iceCream);
    }

    @Test
    void getAllIceCreams() {
        List<IceCream> iceCreams = iceCreamService.getAllIceCreams();

        iceCreams.forEach(System.out::println);
    }

    @Test
    void getIceCreamById() {
        long id = iceCreamService.getAllIceCreams().get(0).getIceCreamId();
        IceCream result = iceCreamService.getIceCreamById(id);

        assertNotNull(result);
        assertEquals("Vanilla", result.getName());
    }

    @Test
    void createIceCream() {
        IceCream iceCream = new IceCream();
        iceCream.setName("Strawberry");
        iceCream.setDescription("Strawberry ice cream");
        iceCream.setType(IceCreamType.HARDSCOOPED);
        iceCream.setImageUrl("https://classycreams.com/strawberry.jpg");
        iceCream.setBasePrice(1.99);
        iceCream.setCalories(250);

        IceCream result = iceCreamService.createIceCream(iceCream);

        assertNotNull(result);
        assertEquals("Strawberry", result.getName());

        IceCream found = iceCreamRepository.findById(result.getIceCreamId()).orElse(null);

        assertNotNull(found);
        assertEquals("Strawberry ice cream", found.getDescription());
    }

    @Test
    void updateIceCream() {
        long id = iceCreamService.getAllIceCreams().get(0).getIceCreamId();
        IceCream iceCream = iceCreamService.getIceCreamById(id);
        iceCream.setName("Organic Vanilla");
        iceCream.setBasePrice(3.49);

        IceCream result = iceCreamService.updateIceCream(iceCream);

        assertNotNull(result);
        assertEquals("Organic Vanilla", result.getName());
        assertEquals(id, result.getIceCreamId());

    }

    @Test
    void deleteIceCreamById() {
        long id = iceCreamService.getAllIceCreams().get(0).getIceCreamId();
        iceCreamService.deleteIceCreamById(id);

        IceCream found = iceCreamRepository.findById(id).orElse(null);

        assertNull(found);
    }
}