package com.facet.api.common;

import com.facet.api.common.BaseResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface Controller {
    BaseResponse process(HttpServletRequest req, HttpServletResponse resp);
}
