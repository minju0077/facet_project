package com.facet.api.common;


import com.facet.api.auction.AuctionController;
import com.facet.api.auction.AuctionRepository;
import com.facet.api.auction.AuctionService;

import java.util.HashMap;
import java.util.Map;

public class AppConfig {
    // 이 클래스는 연결만 담당 // 일을 배치해주는 매니저같은 역할
    private final Map<String, Controller> controllerMap = new HashMap<>();
    private final AuctionRepository auctionRepository = new AuctionRepository();
    private final AuctionService auctionService = new AuctionService(auctionRepository);
    private final AuctionController auctionController = new AuctionController(auctionService);

    public AppConfig(){
        controllerMap.put("images/upload", auctionController);
    }

    // 특정 uri를 이용해서 특정 컨트롤러 객체를 반환하는 메소드
    public Controller getController(String uri) {
        return controllerMap.get(uri);
    }
}
