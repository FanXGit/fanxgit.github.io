(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{1029:function(e,s,n){e.exports=n.p+"assets/img/springboot-exception-1.3474d769.png"},1030:function(e,s,n){e.exports=n.p+"assets/img/springboot-exception-10.53aa77b9.png"},1031:function(e,s,n){e.exports=n.p+"assets/img/springboot-exception-11.9f61acc5.png"},3665:function(e,s,n){"use strict";n.r(s);var a=n(7),t=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"springboot接口-如何统一异常处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot接口-如何统一异常处理"}},[e._v("#")]),e._v(" SpringBoot接口 - 如何统一异常处理")]),e._v(" "),s("p",[e._v("===================================================")]),e._v(" "),s("blockquote",[s("p",[e._v("SpringBoot接口如何对异常进行统一封装，并统一返回呢？以上文的参数校验为例，如何优雅的将参数校验的错误信息统一处理并封装返回呢？@pdai")])]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#springboot%E6%8E%A5%E5%8F%A3---%E5%A6%82%E4%BD%95%E7%BB%9F%E4%B8%80%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86"}},[e._v("SpringBoot接口 - 如何统一异常处理")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BC%98%E9%9B%85%E7%9A%84%E5%A4%84%E7%90%86%E5%BC%82%E5%B8%B8"}},[e._v("为什么要优雅的处理异常")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0%E6%A1%88%E4%BE%8B"}},[e._v("实现案例")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#controlleradvice%E5%BC%82%E5%B8%B8%E7%BB%9F%E4%B8%80%E5%A4%84%E7%90%86"}},[e._v("@ControllerAdvice异常统一处理")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#controller%E6%8E%A5%E5%8F%A3"}},[e._v("Controller接口")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95"}},[e._v("运行测试")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E8%BF%9B%E4%B8%80%E6%AD%A5%E7%90%86%E8%A7%A3"}},[e._v("进一步理解")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#controlleradvice%E8%BF%98%E5%8F%AF%E4%BB%A5%E6%80%8E%E4%B9%88%E7%94%A8"}},[e._v("@ControllerAdvice还可以怎么用？")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#controlleradvice%E6%98%AF%E5%A6%82%E4%BD%95%E8%B5%B7%E4%BD%9C%E7%94%A8%E7%9A%84%E5%8E%9F%E7%90%86"}},[e._v("@ControllerAdvice是如何起作用的（原理）？")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E7%A4%BA%E4%BE%8B%E6%BA%90%E7%A0%81"}},[e._v("示例源码")])])])])]),e._v(" "),s("h1",{attrs:{id:"为什么要优雅的处理异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要优雅的处理异常"}},[e._v("#")]),e._v(" 为什么要优雅的处理异常")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("如果我们不统一的处理异常，经常会在controller层有大量的异常处理的代码， 比如：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Slf4j\n@Api(value = "User Interfaces", tags = "User Interfaces")\n@RestController\n@RequestMapping("/user")\npublic class UserController {\n\n    /**\n     * http://localhost:8080/user/add .\n     *\n     * @param userParam user param\n     * @return user\n     */\n    @ApiOperation("Add User")\n    @ApiImplicitParam(name = "userParam", type = "body", dataTypeClass = UserParam.class, required = true)\n    @PostMapping("add")\n    public ResponseEntity<String> add(@Valid @RequestBody UserParam userParam) {\n        // 每个接口充斥着大量的异常处理\n        try {\n            // do something\n        } catch(Exception e) {\n            return ResponseEntity.fail("error");\n        }\n        return ResponseEntity.ok("success");\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br")])]),s("p",[e._v("那怎么实现统一的异常处理，特别是结合参数校验等封装？")]),e._v(" "),s("h1",{attrs:{id:"实现案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现案例"}},[e._v("#")]),e._v(" 实现案例")]),e._v(" "),s("hr"),e._v(" "),s("blockquote",[s("p",[e._v("简单展示通过@ControllerAdvice进行统一异常处理。")])]),e._v(" "),s("h3",{attrs:{id:"controlleradvice异常统一处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controlleradvice异常统一处理"}},[e._v("#")]),e._v(" @ControllerAdvice异常统一处理")]),e._v(" "),s("p",[e._v("对于400参数错误异常")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('/**\n * Global exception handler.\n *\n * @author pdai\n */\n@Slf4j\n@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    /**\n     * exception handler for bad request.\n     *\n     * @param e\n     *            exception\n     * @return ResponseResult\n     */\n    @ResponseBody\n    @ResponseStatus(code = HttpStatus.BAD_REQUEST)\n    @ExceptionHandler(value = { BindException.class, ValidationException.class, MethodArgumentNotValidException.class })\n    public ResponseResult<ExceptionData> handleParameterVerificationException(@NonNull Exception e) {\n        ExceptionData.ExceptionDataBuilder exceptionDataBuilder = ExceptionData.builder();\n        log.warn("Exception: {}", e.getMessage());\n        if (e instanceof BindException) {\n            BindingResult bindingResult = ((MethodArgumentNotValidException) e).getBindingResult();\n            bindingResult.getAllErrors().stream().map(DefaultMessageSourceResolvable::getDefaultMessage)\n                    .forEach(exceptionDataBuilder::error);\n        } else if (e instanceof ConstraintViolationException) {\n            if (e.getMessage() != null) {\n                exceptionDataBuilder.error(e.getMessage());\n            }\n        } else {\n            exceptionDataBuilder.error("invalid parameter");\n        }\n        return ResponseResultEntity.fail(exceptionDataBuilder.build(), "invalid parameter");\n    }\n\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br")])]),s("p",[e._v("对于自定义异常")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('/**\n * handle business exception.\n *\n * @param businessException\n *            business exception\n * @return ResponseResult\n */\n@ResponseBody\n@ExceptionHandler(BusinessException.class)\npublic ResponseResult<BusinessException> processBusinessException(BusinessException businessException) {\n    log.error(businessException.getLocalizedMessage(), businessException);\n    // 这里可以屏蔽掉后台的异常栈信息，直接返回"business error"\n    return ResponseResultEntity.fail(businessException, businessException.getLocalizedMessage());\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("对于其它异常")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('/**\n * handle other exception.\n *\n * @param exception\n *            exception\n * @return ResponseResult\n */\n@ResponseBody\n@ExceptionHandler(Exception.class)\npublic ResponseResult<Exception> processException(Exception exception) {\n    log.error(exception.getLocalizedMessage(), exception);\n    // 这里可以屏蔽掉后台的异常栈信息，直接返回"server error"\n    return ResponseResultEntity.fail(exception, exception.getLocalizedMessage());\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("h3",{attrs:{id:"controller接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controller接口"}},[e._v("#")]),e._v(" Controller接口")]),e._v(" "),s("p",[e._v("（接口中无需处理异常）")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Slf4j\n@Api(value = "User Interfaces", tags = "User Interfaces")\n@RestController\n@RequestMapping("/user")\npublic class UserController {\n\n    /**\n     * http://localhost:8080/user/add .\n     *\n     * @param userParam user param\n     * @return user\n     */\n    @ApiOperation("Add User")\n    @ApiImplicitParam(name = "userParam", type = "body", dataTypeClass = UserParam.class, required = true)\n    @PostMapping("add")\n    public ResponseEntity<UserParam> add(@Valid @RequestBody UserParam userParam) {\n        return ResponseEntity.ok(userParam);\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br")])]),s("h3",{attrs:{id:"运行测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行测试"}},[e._v("#")]),e._v(" 运行测试")]),e._v(" "),s("p",[e._v("这里用postman测试下")]),e._v(" "),s("p",[s("img",{attrs:{src:n(1029),alt:""}})]),e._v(" "),s("h1",{attrs:{id:"进一步理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进一步理解"}},[e._v("#")]),e._v(" 进一步理解")]),e._v(" "),s("hr"),e._v(" "),s("blockquote",[s("p",[e._v("我们再通过一些问题来帮助你更深入理解@ControllerAdvice。@pdai")])]),e._v(" "),s("h3",{attrs:{id:"controlleradvice还可以怎么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controlleradvice还可以怎么用"}},[e._v("#")]),e._v(" @ControllerAdvice还可以怎么用？")]),e._v(" "),s("p",[e._v("除了通过@ExceptionHandler注解用于全局异常的处理之外，@ControllerAdvice还有两个用法：")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("@InitBinder注解")])])]),e._v(" "),s("p",[e._v("用于请求中注册自定义参数的解析，从而达到自定义请求参数格式的目的；")]),e._v(" "),s("p",[e._v("比如，在@ControllerAdvice注解的类中添加如下方法，来统一处理日期格式的格式化")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@InitBinder\npublic void handleInitBinder(WebDataBinder dataBinder){\n    dataBinder.registerCustomEditor(Date.class,\n            new CustomDateEditor(new SimpleDateFormat("yyyy-MM-dd"), false));\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("Controller中传入参数（string类型）自动转化为Date类型")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@GetMapping("testDate")\npublic Date processApi(Date date) {\n    return date;\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("ul",[s("li",[s("strong",[e._v("@ModelAttribute注解")])])]),e._v(" "),s("p",[e._v("用来预设全局参数，比如最典型的使用Spring Security时将添加当前登录的用户信息（UserDetails)作为参数。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@ModelAttribute("currentUser")\npublic UserDetails modelAttribute() {\n    return (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("所有controller类中requestMapping方法都可以直接获取并使用currentUser")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@PostMapping("saveSomething")\npublic ResponseEntity<String> saveSomeObj(@ModelAttribute("currentUser") UserDetails operator) {\n    // 保存操作，并设置当前操作人员的ID（从UserDetails中获得）\n    return ResponseEntity.success("ok");\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"controlleradvice是如何起作用的-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controlleradvice是如何起作用的-原理"}},[e._v("#")]),e._v(" @ControllerAdvice是如何起作用的（原理）？")]),e._v(" "),s("p",[e._v("我们在"),s("a",{attrs:{href:"https://pdai.tech/md/spring/spring-x-framework-springmvc.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring基础 - SpringMVC案例和机制"),s("OutboundLink")],1),e._v("的基础上来看@ControllerAdvice的源码实现。")]),e._v(" "),s("p",[e._v("DispatcherServlet中onRefresh方法是初始化ApplicationContext后的回调方法，它会调用initStrategies方法，主要更新一些servlet需要使用的对象，包括国际化处理，requestMapping，视图解析等等。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/**\n    * This implementation calls {@link #initStrategies}.\n    */\n@Override\nprotected void onRefresh(ApplicationContext context) {\n    initStrategies(context);\n}\n\n/**\n    * Initialize the strategy objects that this servlet uses.\n    * <p>May be overridden in subclasses in order to initialize further strategy objects.\n    */\nprotected void initStrategies(ApplicationContext context) {\n    initMultipartResolver(context); // 文件上传\n    initLocaleResolver(context); // i18n国际化\n    initThemeResolver(context); // 主题\n    initHandlerMappings(context); // requestMapping\n    initHandlerAdapters(context); // adapters\n    initHandlerExceptionResolvers(context); // 异常处理\n    initRequestToViewNameTranslator(context);\n    initViewResolvers(context);\n    initFlashMapManager(context);\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br")])]),s("p",[e._v("从上述代码看，如果要提供@ControllerAdvice提供的三种注解功能，从设计和实现的角度肯定是实现的代码需要放在initStrategies方法中。")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("@ModelAttribute和@InitBinder处理")])])]),e._v(" "),s("p",[e._v("具体来看，如果你是设计者，很显然容易想到：对于@ModelAttribute提供的参数预置和@InitBinder注解提供的预处理方法应该是放在一个方法中的，因为它们都是在进入requestMapping方法前做的操作。")]),e._v(" "),s("p",[e._v("如下方法是获取所有的HandlerAdapter，无非就是从BeanFactory中获取（BeanFactory相关知识请参考 "),s("a",{attrs:{href:"https://pdai.tech/md/spring/spring-x-framework-ioc-source-1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring进阶- Spring IOC实现原理详解之IOC体系结构设计"),s("OutboundLink")],1),e._v(")")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('private void initHandlerAdapters(ApplicationContext context) {\n    this.handlerAdapters = null;\n\n    if (this.detectAllHandlerAdapters) {\n        // Find all HandlerAdapters in the ApplicationContext, including ancestor contexts.\n        Map<String, HandlerAdapter> matchingBeans =\n                BeanFactoryUtils.beansOfTypeIncludingAncestors(context, HandlerAdapter.class, true, false);\n        if (!matchingBeans.isEmpty()) {\n            this.handlerAdapters = new ArrayList<>(matchingBeans.values());\n            // We keep HandlerAdapters in sorted order.\n            AnnotationAwareOrderComparator.sort(this.handlerAdapters);\n        }\n    }\n    else {\n        try {\n            HandlerAdapter ha = context.getBean(HANDLER_ADAPTER_BEAN_NAME, HandlerAdapter.class);\n            this.handlerAdapters = Collections.singletonList(ha);\n        }\n        catch (NoSuchBeanDefinitionException ex) {\n            // Ignore, we\'ll add a default HandlerAdapter later.\n        }\n    }\n\n    // Ensure we have at least some HandlerAdapters, by registering\n    // default HandlerAdapters if no other adapters are found.\n    if (this.handlerAdapters == null) {\n        this.handlerAdapters = getDefaultStrategies(context, HandlerAdapter.class);\n        if (logger.isTraceEnabled()) {\n            logger.trace("No HandlerAdapters declared for servlet \'" + getServletName() +\n                    "\': using default strategies from DispatcherServlet.properties");\n        }\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br")])]),s("p",[e._v("我们要处理的是requestMapping的handlerResolver，作为设计者，就很容易出如下的结构")]),e._v(" "),s("p",[s("img",{attrs:{src:n(1030),alt:""}})]),e._v(" "),s("p",[e._v("在RequestMappingHandlerAdapter中的afterPropertiesSet去处理advice")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Override\npublic void afterPropertiesSet() {\n    // Do this first, it may add ResponseBody advice beans\n    initControllerAdviceCache();\n\n    if (this.argumentResolvers == null) {\n        List<HandlerMethodArgumentResolver> resolvers = getDefaultArgumentResolvers();\n        this.argumentResolvers = new HandlerMethodArgumentResolverComposite().addResolvers(resolvers);\n    }\n    if (this.initBinderArgumentResolvers == null) {\n        List<HandlerMethodArgumentResolver> resolvers = getDefaultInitBinderArgumentResolvers();\n        this.initBinderArgumentResolvers = new HandlerMethodArgumentResolverComposite().addResolvers(resolvers);\n    }\n    if (this.returnValueHandlers == null) {\n        List<HandlerMethodReturnValueHandler> handlers = getDefaultReturnValueHandlers();\n        this.returnValueHandlers = new HandlerMethodReturnValueHandlerComposite().addHandlers(handlers);\n    }\n}\n\nprivate void initControllerAdviceCache() {\n    if (getApplicationContext() == null) {\n        return;\n    }\n\n    List<ControllerAdviceBean> adviceBeans = ControllerAdviceBean.findAnnotatedBeans(getApplicationContext());\n\n    List<Object> requestResponseBodyAdviceBeans = new ArrayList<>();\n\n    for (ControllerAdviceBean adviceBean : adviceBeans) {\n        Class<?> beanType = adviceBean.getBeanType();\n        if (beanType == null) {\n            throw new IllegalStateException("Unresolvable type for ControllerAdviceBean: " + adviceBean);\n        }\n        // 缓存所有modelAttribute注解方法\n        Set<Method> attrMethods = MethodIntrospector.selectMethods(beanType, MODEL_ATTRIBUTE_METHODS);\n        if (!attrMethods.isEmpty()) {\n            this.modelAttributeAdviceCache.put(adviceBean, attrMethods);\n        }\n        // 缓存所有initBinder注解方法\n        Set<Method> binderMethods = MethodIntrospector.selectMethods(beanType, INIT_BINDER_METHODS);\n        if (!binderMethods.isEmpty()) {\n            this.initBinderAdviceCache.put(adviceBean, binderMethods);\n        }\n        if (RequestBodyAdvice.class.isAssignableFrom(beanType) || ResponseBodyAdvice.class.isAssignableFrom(beanType)) {\n            requestResponseBodyAdviceBeans.add(adviceBean);\n        }\n    }\n\n    if (!requestResponseBodyAdviceBeans.isEmpty()) {\n        this.requestResponseBodyAdvice.addAll(0, requestResponseBodyAdviceBeans);\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br")])]),s("ul",[s("li",[s("strong",[e._v("@ExceptionHandler处理")])])]),e._v(" "),s("p",[e._v("@ExceptionHandler显然是在上述initHandlerExceptionResolvers(context)方法中。")]),e._v(" "),s("p",[e._v("同样的，从BeanFactory中获取HandlerExceptionResolver")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('/**\n    * Initialize the HandlerExceptionResolver used by this class.\n    * <p>If no bean is defined with the given name in the BeanFactory for this namespace,\n    * we default to no exception resolver.\n    */\nprivate void initHandlerExceptionResolvers(ApplicationContext context) {\n    this.handlerExceptionResolvers = null;\n\n    if (this.detectAllHandlerExceptionResolvers) {\n        // Find all HandlerExceptionResolvers in the ApplicationContext, including ancestor contexts.\n        Map<String, HandlerExceptionResolver> matchingBeans = BeanFactoryUtils\n                .beansOfTypeIncludingAncestors(context, HandlerExceptionResolver.class, true, false);\n        if (!matchingBeans.isEmpty()) {\n            this.handlerExceptionResolvers = new ArrayList<>(matchingBeans.values());\n            // We keep HandlerExceptionResolvers in sorted order.\n            AnnotationAwareOrderComparator.sort(this.handlerExceptionResolvers);\n        }\n    }\n    else {\n        try {\n            HandlerExceptionResolver her =\n                    context.getBean(HANDLER_EXCEPTION_RESOLVER_BEAN_NAME, HandlerExceptionResolver.class);\n            this.handlerExceptionResolvers = Collections.singletonList(her);\n        }\n        catch (NoSuchBeanDefinitionException ex) {\n            // Ignore, no HandlerExceptionResolver is fine too.\n        }\n    }\n\n    // Ensure we have at least some HandlerExceptionResolvers, by registering\n    // default HandlerExceptionResolvers if no other resolvers are found.\n    if (this.handlerExceptionResolvers == null) {\n        this.handlerExceptionResolvers = getDefaultStrategies(context, HandlerExceptionResolver.class);\n        if (logger.isTraceEnabled()) {\n            logger.trace("No HandlerExceptionResolvers declared in servlet \'" + getServletName() +\n                    "\': using default strategies from DispatcherServlet.properties");\n        }\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br")])]),s("p",[e._v("我们很容易找到ExceptionHandlerExceptionResolver")]),e._v(" "),s("p",[s("img",{attrs:{src:n(1031),alt:""}})]),e._v(" "),s("p",[e._v("同样的在afterPropertiesSet去处理advice")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Override\npublic void afterPropertiesSet() {\n    // Do this first, it may add ResponseBodyAdvice beans\n    initExceptionHandlerAdviceCache();\n\n    if (this.argumentResolvers == null) {\n        List<HandlerMethodArgumentResolver> resolvers = getDefaultArgumentResolvers();\n        this.argumentResolvers = new HandlerMethodArgumentResolverComposite().addResolvers(resolvers);\n    }\n    if (this.returnValueHandlers == null) {\n        List<HandlerMethodReturnValueHandler> handlers = getDefaultReturnValueHandlers();\n        this.returnValueHandlers = new HandlerMethodReturnValueHandlerComposite().addHandlers(handlers);\n    }\n}\n\nprivate void initExceptionHandlerAdviceCache() {\n    if (getApplicationContext() == null) {\n        return;\n    }\n\n    List<ControllerAdviceBean> adviceBeans = ControllerAdviceBean.findAnnotatedBeans(getApplicationContext());\n    for (ControllerAdviceBean adviceBean : adviceBeans) {\n        Class<?> beanType = adviceBean.getBeanType();\n        if (beanType == null) {\n            throw new IllegalStateException("Unresolvable type for ControllerAdviceBean: " + adviceBean);\n        }\n        ExceptionHandlerMethodResolver resolver = new ExceptionHandlerMethodResolver(beanType);\n        if (resolver.hasExceptionMappings()) {\n            this.exceptionHandlerAdviceCache.put(adviceBean, resolver);\n        }\n        if (ResponseBodyAdvice.class.isAssignableFrom(beanType)) {\n            this.responseBodyAdvice.add(adviceBean);\n        }\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br")])]),s("h1",{attrs:{id:"示例源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例源码"}},[e._v("#")]),e._v(" 示例源码")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("https://github.com/realpdai/tech-pdai-spring-demos")])])}),[],!1,null,null,null);s.default=t.exports}}]);