package com.facet.api.auction;

import com.facet.api.common.BaseResponse;
import com.facet.api.common.Controller;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class AuctionController implements Controller {
    private final AuctionService auctionService;

    public AuctionController(AuctionService auctionService) {
        this.auctionService = auctionService;
    }

    @Override
    public BaseResponse process(HttpServletRequest req, HttpServletResponse resp) {
        return null;
    }
}
