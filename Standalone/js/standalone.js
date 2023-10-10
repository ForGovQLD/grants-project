$(function() {
    
    var jstree = $(".js-tree-menu").jstree({
        "types" : {
            "default": {
                "valid_children": ["default", "file"]
            },
            "file": {
                "icon": "glyphicon glyphicon-file",
                "valid_children": []
            }
        },
        "plugins" : [ 
            "types", 
            "wholerow"
        ],
        "core": {
            "themes": {
                'responsive': true,
                "stripes": true
            },
            "data": [{"text": "Introduction", "children": [{"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303064", "identifier": "12303064", "description": "", "completion_type": "2"}, "resource": {"href": "content\\01-Introduction\\Welcome to the course.html", "type": "webcontent", "identifier": "RES_CONTENT_12303064", "material_type": "content"}}, "text": "Welcome to the course", "children": [], "href": "content\\01-Introduction\\Welcome to the course.html", "type": "file", "id": "12303064"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303065", "identifier": "12303065", "description": "", "completion_type": "2"}, "resource": {"href": "content\\01-Introduction\\What is Digital Literacy.html", "type": "webcontent", "identifier": "RES_CONTENT_12303065", "material_type": "content"}}, "text": "What is Digital Literacy?", "children": [], "href": "content\\01-Introduction\\What is Digital Literacy.html", "type": "file", "id": "12303065"}], "state": {"opened": 0}, "xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303063", "identifier": "12303063", "description": "", "completion_type": "2"}, "resource": {"href": "", "type": "webcontent", "identifier": "RES_CONTENT_12303063", "material_type": "contentmodule"}}, "type": "directory", "id": "12303063"}, {"text": "Hardware", "children": [{"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303067", "identifier": "12303067", "description": "", "completion_type": "2"}, "resource": {"href": "content\\02-Hardware\\Hardware.html", "type": "webcontent", "identifier": "RES_CONTENT_12303067", "material_type": "content"}}, "text": "Hardware", "children": [], "href": "content\\02-Hardware\\Hardware.html", "type": "file", "id": "12303067"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303068", "identifier": "12303068", "description": "", "completion_type": "2"}, "resource": {"href": "content\\02-Hardware\\What are the different types of computers.html", "type": "webcontent", "identifier": "RES_CONTENT_12303068", "material_type": "content"}}, "text": "What are the different types of computers?", "children": [], "href": "content\\02-Hardware\\What are the different types of computers.html", "type": "file", "id": "12303068"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303069", "identifier": "12303069", "description": "", "completion_type": "2"}, "resource": {"href": "content\\02-Hardware\\Smartphones.html", "type": "webcontent", "identifier": "RES_CONTENT_12303069", "material_type": "content"}}, "text": "Smartphones", "children": [], "href": "content\\02-Hardware\\Smartphones.html", "type": "file", "id": "12303069"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303070", "identifier": "12303070", "description": "", "completion_type": "2"}, "resource": {"href": "content\\02-Hardware\\Wearables.html", "type": "webcontent", "identifier": "RES_CONTENT_12303070", "material_type": "content"}}, "text": "Wearables", "children": [], "href": "content\\02-Hardware\\Wearables.html", "type": "file", "id": "12303070"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303078", "identifier": "12303078", "description": "", "completion_type": "2"}, "resource": {"href": "content\\02-Hardware\\Smart Devices.html", "type": "webcontent", "identifier": "RES_CONTENT_12303078", "material_type": "content"}}, "text": "Smart Devices", "children": [], "href": "content\\02-Hardware\\Smart Devices.html", "type": "file", "id": "12303078"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303079", "identifier": "12303079", "description": "", "completion_type": "2"}, "resource": {"href": "content\\02-Hardware\\An IoT smart home with AI by Qualcomm Technologies.html", "type": "webcontent", "identifier": "RES_CONTENT_12303079", "material_type": "content"}}, "text": "An IoT smart home with AI by Qualcomm Technologies", "children": [], "href": "content\\02-Hardware\\An IoT smart home with AI by Qualcomm Technologies.html", "type": "file", "id": "12303079"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303080", "identifier": "12303080", "description": "", "completion_type": "2"}, "resource": {"href": "content\\02-Hardware\\Activity Smart devices.html", "type": "webcontent", "identifier": "RES_CONTENT_12303080", "material_type": "content"}}, "text": "Activity: Smart devices", "children": [], "href": "content\\02-Hardware\\Activity Smart devices.html", "type": "file", "id": "12303080"}], "state": {"opened": 0}, "xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303066", "identifier": "12303066", "description": "", "completion_type": "2"}, "resource": {"href": "", "type": "webcontent", "identifier": "RES_CONTENT_12303066", "material_type": "contentmodule"}}, "type": "directory", "id": "12303066"}, {"text": "Software and Applications", "children": [{"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303082", "identifier": "12303082", "description": "", "completion_type": "2"}, "resource": {"href": "content\\03-Software_and_Applications\\What is software.html", "type": "webcontent", "identifier": "RES_CONTENT_12303082", "material_type": "content"}}, "text": "What is software?", "children": [], "href": "content\\03-Software_and_Applications\\What is software.html", "type": "file", "id": "12303082"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303083", "identifier": "12303083", "description": "", "completion_type": "2"}, "resource": {"href": "content\\03-Software_and_Applications\\Types of software.html", "type": "webcontent", "identifier": "RES_CONTENT_12303083", "material_type": "content"}}, "text": "Types of software", "children": [], "href": "content\\03-Software_and_Applications\\Types of software.html", "type": "file", "id": "12303083"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303084", "identifier": "12303084", "description": "", "completion_type": "2"}, "resource": {"href": "content\\03-Software_and_Applications\\What is an operating system.html", "type": "webcontent", "identifier": "RES_CONTENT_12303084", "material_type": "content"}}, "text": "What is an operating system?", "children": [], "href": "content\\03-Software_and_Applications\\What is an operating system.html", "type": "file", "id": "12303084"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303085", "identifier": "12303085", "description": "", "completion_type": "2"}, "resource": {"href": "content\\03-Software_and_Applications\\Operating Systems.html", "type": "webcontent", "identifier": "RES_CONTENT_12303085", "material_type": "content"}}, "text": "Operating Systems", "children": [], "href": "content\\03-Software_and_Applications\\Operating Systems.html", "type": "file", "id": "12303085"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303087", "identifier": "12303087", "description": "", "completion_type": "2"}, "resource": {"href": "content\\03-Software_and_Applications\\Examples of application software.html", "type": "webcontent", "identifier": "RES_CONTENT_12303087", "material_type": "content"}}, "text": "Examples of application software", "children": [], "href": "content\\03-Software_and_Applications\\Examples of application software.html", "type": "file", "id": "12303087"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303115", "identifier": "12303115", "description": "", "completion_type": "2"}, "resource": {"href": "content\\03-Software_and_Applications\\Mobile fun facts.html", "type": "webcontent", "identifier": "RES_CONTENT_12303115", "material_type": "content"}}, "text": "Mobile fun facts", "children": [], "href": "content\\03-Software_and_Applications\\Mobile fun facts.html", "type": "file", "id": "12303115"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303116", "identifier": "12303116", "description": "", "completion_type": "2"}, "resource": {"href": "content\\03-Software_and_Applications\\How to install an app to your smart phone.html", "type": "webcontent", "identifier": "RES_CONTENT_12303116", "material_type": "content"}}, "text": "How to install an app to your smart phone", "children": [], "href": "content\\03-Software_and_Applications\\How to install an app to your smart phone.html", "type": "file", "id": "12303116"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_66bcf111-71a3-44ea-8a3c-548a9a422cdb", "identifier": "15896fb6-5fce-42bc-8a98-cad56324e332", "description": "", "completion_type": "2"}, "resource": {"href": "content\\03-Software_and_Applications\\Activity 2.html", "type": "webcontent", "identifier": "RES_CONTENT_66bcf111-71a3-44ea-8a3c-548a9a422cdb", "material_type": "content"}}, "text": "Activity 2", "children": [], "href": "content\\03-Software_and_Applications\\Activity 2.html", "type": "file", "id": "15896fb6-5fce-42bc-8a98-cad56324e332"}], "state": {"opened": 0}, "xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303081", "identifier": "12303081", "description": "", "completion_type": "2"}, "resource": {"href": "", "type": "webcontent", "identifier": "RES_CONTENT_12303081", "material_type": "contentmodule"}}, "type": "directory", "id": "12303081"}, {"text": "Workplace Applications", "children": [{"xml_attributes": {"item": {"identifierref": "RES_CONTENT_5df9503b-6886-4839-bc58-0407bb5cd4d0", "identifier": "87efe3c5-996e-4082-9226-360afb403af5", "description": "", "completion_type": "2"}, "resource": {"href": "content\\04-Workplace_Applications\\Productivity Applications.html", "type": "webcontent", "identifier": "RES_CONTENT_5df9503b-6886-4839-bc58-0407bb5cd4d0", "material_type": "content"}}, "text": "Productivity Applications", "children": [], "href": "content\\04-Workplace_Applications\\Productivity Applications.html", "type": "file", "id": "87efe3c5-996e-4082-9226-360afb403af5"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_7e99b047-dfd8-4b62-8a38-cc316c5b2c4b", "identifier": "04a304ce-1deb-4102-bcdf-277cd8d19d25", "description": "", "completion_type": "2"}, "resource": {"href": "content\\04-Workplace_Applications\\Microsoft Office.html", "type": "webcontent", "identifier": "RES_CONTENT_7e99b047-dfd8-4b62-8a38-cc316c5b2c4b", "material_type": "content"}}, "text": "Microsoft Office", "children": [], "href": "content\\04-Workplace_Applications\\Microsoft Office.html", "type": "file", "id": "04a304ce-1deb-4102-bcdf-277cd8d19d25"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_69047626-fea7-4b31-8a51-bae85f7afb47", "identifier": "53739c75-046d-4e73-97a0-a77307946516", "description": "", "completion_type": "2"}, "resource": {"href": "content\\04-Workplace_Applications\\Microsoft Word.html", "type": "webcontent", "identifier": "RES_CONTENT_69047626-fea7-4b31-8a51-bae85f7afb47", "material_type": "content"}}, "text": "Microsoft Word", "children": [], "href": "content\\04-Workplace_Applications\\Microsoft Word.html", "type": "file", "id": "53739c75-046d-4e73-97a0-a77307946516"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_3ba26064-b5e4-483d-bdf4-88bd91026f49", "identifier": "0a00da3a-8e46-4e1c-864c-891d8a6902e0", "description": "", "completion_type": "2"}, "resource": {"href": "content\\04-Workplace_Applications\\Activity- Microsoft Word.html", "type": "webcontent", "identifier": "RES_CONTENT_3ba26064-b5e4-483d-bdf4-88bd91026f49", "material_type": "content"}}, "text": "Activity: Microsoft Word", "children": [], "href": "content\\04-Workplace_Applications\\Activity- Microsoft Word.html", "type": "file", "id": "0a00da3a-8e46-4e1c-864c-891d8a6902e0"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_9d01725f-f5fd-429e-b241-285effd63ccf", "identifier": "4f97adf2-0d0c-48dd-9176-a5db9306d3f0", "description": "", "completion_type": "2"}, "resource": {"href": "content\\04-Workplace_Applications\\Microsoft Excel.html", "type": "webcontent", "identifier": "RES_CONTENT_9d01725f-f5fd-429e-b241-285effd63ccf", "material_type": "content"}}, "text": "Microsoft Excel", "children": [], "href": "content\\04-Workplace_Applications\\Microsoft Excel.html", "type": "file", "id": "4f97adf2-0d0c-48dd-9176-a5db9306d3f0"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_a532bdae-c0f6-4dfc-85cc-02b4511b3158", "identifier": "fcde7322-2c8a-4869-b22e-870aa4dfd26e", "description": "", "completion_type": "2"}, "resource": {"href": "content\\04-Workplace_Applications\\Activity  - Microsoft Excel.html", "type": "webcontent", "identifier": "RES_CONTENT_a532bdae-c0f6-4dfc-85cc-02b4511b3158", "material_type": "content"}}, "text": "Activity: Microsoft Excel", "children": [], "href": "content\\04-Workplace_Applications\\Activity  - Microsoft Excel.html", "type": "file", "id": "fcde7322-2c8a-4869-b22e-870aa4dfd26e"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_0fb7f442-2cab-4024-9549-da49ddb1f8a8", "identifier": "c425367e-6931-4642-90c0-db2a6b491b44", "description": "", "completion_type": "2"}, "resource": {"href": "content\\04-Workplace_Applications\\Communication Applications.html", "type": "webcontent", "identifier": "RES_CONTENT_0fb7f442-2cab-4024-9549-da49ddb1f8a8", "material_type": "content"}}, "text": "Communication Applications", "children": [], "href": "content\\04-Workplace_Applications\\Communication Applications.html", "type": "file", "id": "c425367e-6931-4642-90c0-db2a6b491b44"}], "state": {"opened": 0}, "xml_attributes": {"item": {"identifierref": "RES_CONTENT_f80aaffa-28cb-4082-a3b3-71c5c37d5d65", "identifier": "f80aaffa-28cb-4082-a3b3-71c5c37d5d65", "description": "", "completion_type": "2"}, "resource": {"href": "", "type": "webcontent", "identifier": "RES_CONTENT_f80aaffa-28cb-4082-a3b3-71c5c37d5d65", "material_type": "contentmodule"}}, "type": "directory", "id": "f80aaffa-28cb-4082-a3b3-71c5c37d5d65"}, {"text": "Internet issues and basic troubleshooting", "children": [{"xml_attributes": {"item": {"identifierref": "RES_CONTENT_7d5870a4-7fe2-497e-ace5-2cdd671cb563", "identifier": "0da650a5-9d5d-40ba-911e-71d9da19c5f8", "description": "", "completion_type": "2"}, "resource": {"href": "content\\05-Internet_issues_and_basic_troubleshooting\\Internet issues and basic troubleshooting.html", "type": "webcontent", "identifier": "RES_CONTENT_7d5870a4-7fe2-497e-ace5-2cdd671cb563", "material_type": "content"}}, "text": "Internet issues and basic troubleshooting", "children": [], "href": "content\\05-Internet_issues_and_basic_troubleshooting\\Internet issues and basic troubleshooting.html", "type": "file", "id": "0da650a5-9d5d-40ba-911e-71d9da19c5f8"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_f64345a8-954c-4c9b-917e-bffedccd7956", "identifier": "6448346d-398b-4fcc-a471-ae209de33269", "description": "", "completion_type": "2"}, "resource": {"href": "content\\05-Internet_issues_and_basic_troubleshooting\\Connecting to the internet.html", "type": "webcontent", "identifier": "RES_CONTENT_f64345a8-954c-4c9b-917e-bffedccd7956", "material_type": "content"}}, "text": "Connecting to the internet", "children": [], "href": "content\\05-Internet_issues_and_basic_troubleshooting\\Connecting to the internet.html", "type": "file", "id": "6448346d-398b-4fcc-a471-ae209de33269"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_8e3ca974-25b9-411a-be56-594ff33885ee", "identifier": "37a072e0-f458-4ad5-8667-25b2eaf06304", "description": "", "completion_type": "2"}, "resource": {"href": "content\\05-Internet_issues_and_basic_troubleshooting\\Internet bandwidth and performance measurement tools.html", "type": "webcontent", "identifier": "RES_CONTENT_8e3ca974-25b9-411a-be56-594ff33885ee", "material_type": "content"}}, "text": "Internet bandwidth and performance measurement tools", "children": [], "href": "content\\05-Internet_issues_and_basic_troubleshooting\\Internet bandwidth and performance measurement tools.html", "type": "file", "id": "37a072e0-f458-4ad5-8667-25b2eaf06304"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_254ad230-4699-4457-85a8-eccd8490484c", "identifier": "389417aa-61f8-4dde-a424-976906b46f26", "description": "", "completion_type": "2"}, "resource": {"href": "content\\05-Internet_issues_and_basic_troubleshooting\\Activity 4.html", "type": "webcontent", "identifier": "RES_CONTENT_254ad230-4699-4457-85a8-eccd8490484c", "material_type": "content"}}, "text": "Activity 4", "children": [], "href": "content\\05-Internet_issues_and_basic_troubleshooting\\Activity 4.html", "type": "file", "id": "389417aa-61f8-4dde-a424-976906b46f26"}], "state": {"opened": 0}, "xml_attributes": {"item": {"identifierref": "RES_CONTENT_bb426510-db81-4942-85e9-47b6e398f25c", "identifier": "bb426510-db81-4942-85e9-47b6e398f25c", "description": "", "completion_type": "2"}, "resource": {"href": "", "type": "webcontent", "identifier": "RES_CONTENT_bb426510-db81-4942-85e9-47b6e398f25c", "material_type": "contentmodule"}}, "type": "directory", "id": "bb426510-db81-4942-85e9-47b6e398f25c"}, {"text": "Computer maintenance and tips to assist performance", "children": [{"xml_attributes": {"item": {"identifierref": "RES_CONTENT_bdc8a8f1-178f-4d2a-a21c-ef47c707de89", "identifier": "2ea2f895-9d40-485b-898c-1452d66be1d3", "description": "", "completion_type": "2"}, "resource": {"href": "content\\06-Computer_maintenance_and_tips_to_assist\\Computer maintenance and tips to assist performance.html", "type": "webcontent", "identifier": "RES_CONTENT_bdc8a8f1-178f-4d2a-a21c-ef47c707de89", "material_type": "content"}}, "text": "Computer maintenance and tips to assist performance", "children": [], "href": "content\\06-Computer_maintenance_and_tips_to_assist\\Computer maintenance and tips to assist performance.html", "type": "file", "id": "2ea2f895-9d40-485b-898c-1452d66be1d3"}, {"xml_attributes": {"item": {"identifierref": "RES_CONTENT_5048f42c-f415-420b-8226-1298f7494a8b", "identifier": "d49d4b82-b6c0-4a0e-b6b0-59bf908072fa", "description": "", "completion_type": "2"}, "resource": {"href": "content\\06-Computer_maintenance_and_tips_to_assist\\Activity 5.html", "type": "webcontent", "identifier": "RES_CONTENT_5048f42c-f415-420b-8226-1298f7494a8b", "material_type": "content"}}, "text": "Activity 5", "children": [], "href": "content\\06-Computer_maintenance_and_tips_to_assist\\Activity 5.html", "type": "file", "id": "d49d4b82-b6c0-4a0e-b6b0-59bf908072fa"}], "state": {"opened": 0}, "xml_attributes": {"item": {"identifierref": "RES_CONTENT_1786aed4-1e96-4d09-8b40-67044f5643e8", "identifier": "1786aed4-1e96-4d09-8b40-67044f5643e8", "description": "", "completion_type": "2"}, "resource": {"href": "", "type": "webcontent", "identifier": "RES_CONTENT_1786aed4-1e96-4d09-8b40-67044f5643e8", "material_type": "contentmodule"}}, "type": "directory", "id": "1786aed4-1e96-4d09-8b40-67044f5643e8"}, {"text": "Summary", "children": [{"xml_attributes": {"item": {"identifierref": "RES_CONTENT_12303119", "identifier": "12303119", "description": "", "completion_type": "2"}, "resource": {"href": "content\\07-Summary\\Summary.html", "type": "webcontent", "identifier": "RES_CONTENT_12303119", "material_type": "content"}}, "text": "Summary", "children": [], "href": "content\\07-Summary\\Summary.html", "type": "file", "id": "12303119"}], "state": {"opened": 0}, "xml_attributes": {"item": {"identifierref": "RES_CONTENT_6196656d-5178-43cc-a821-594319317f49", "identifier": "6196656d-5178-43cc-a821-594319317f49", "description": "", "completion_type": "2"}, "resource": {"href": "", "type": "webcontent", "identifier": "RES_CONTENT_6196656d-5178-43cc-a821-594319317f49", "material_type": "contentmodule"}}, "type": "directory", "id": "6196656d-5178-43cc-a821-594319317f49"}]
        }
    });
    
    jstree.on("loaded.jstree", function(event, tree){ 
        var node_id = window.location.href.split("?page_id=")[1]
        var menu_state = window.location.href.split("?menu=")[1]
        if (menu_state != undefined) {
            menu_state = menu_state.split("?page_id=")[0]
            if (menu_state == "true") {
                $(".menu-controls").addClass("menu_hidden")
                $(".menu-controls").find(".fa-angle-double-left").addClass("hidden")
                $(".menu-controls").find(".fa-angle-double-right").removeClass("hidden")
                $(".js-tree-menu").css("left", "-370px")
                $(".unit-info").css("left", "-370px")
                $(".menu-controls").css("left", "0px")
                $(".standalone-content-wrapper").css("marginLeft", "0px")
            }
        }
        if (!node_id) {
            node_id = $(".jstree-container-ul").children().first().attr("id")
        }
        tree = tree.instance
        var node = tree.get_node(node_id)
        tree.select_node(node)
        if (node.type == "default") {
            getNextPage(tree, node_id)
        }
        bindSelect(tree)
        bindNextPrev(tree)
    })

    function bindSelect(tree) {
        jstree.on("select_node.jstree", function(event, node) {
            var menu_state = $(".menu-controls").hasClass("menu_hidden")
            if (node.node.type == "file") {
                window.location.href = "../../" + node.node.original.href + "?menu="+ menu_state + "?page_id="+node.node.id+""
            }
            else if (tree.is_open(node.node.id)) {
                tree.close_node(node.node.id)
            }
            else if (tree.is_closed(node.node.id)) {
                tree.open_node(node.node.id)
            }
        })
    }

    function bindNextPrev(tree) {
        $(".standalon-page-nav").find(".fa-chevron-circle-right").on("click", function() {
            getNextPage(tree)
        })
        $(".standalon-page-nav").find(".fa-chevron-circle-left").on("click", function() {
            getPrevPage(tree)
        })
    }

    function getNextPage(tree) {
        var id = tree.get_selected()
        var current_node = tree.get_node(id)
        tree.open_all()
        var next = tree.get_node(tree.get_next_dom(id))
        if (next) {
            if (next.type == "file") {
                tree.deselect_node(current_node)
                tree.select_node(next)
            }
            else {
                tree.deselect_node(current_node)
                tree.select_node(next)
                getNextPage(tree)
            }
        }
    }

    function getPrevPage(tree) {
        var id = tree.get_selected()
        var current_node = tree.get_node(id)
        tree.open_all()
        var prev = tree.get_node(tree.get_prev_dom(id))
        if (prev) {
            if (prev.type == "file") {
                tree.deselect_node(current_node)
                tree.select_node(prev)
            }
            else {
                tree.deselect_node(current_node)
                tree.select_node(prev)
                getPrevPage(tree)
            }
        }
    }

    $(".menu-controls").on("click", function() {
        if ($(this).find(".fa-angle-double-left").hasClass("hidden")) {
            $(".menu-controls").removeClass("menu_hidden")
            $(this).find(".fa-angle-double-left").removeClass("hidden")
            $(this).find(".fa-angle-double-right").addClass("hidden")
            $(".js-tree-menu").animate({"left": "0px"}, {queue: false})
            $(".unit-info").animate({"left": "0px"}, {queue: false})
            $(".menu-controls").animate({"left": "370px"}, {queue: false})
            $(".standalone-content-wrapper").animate({"marginLeft": "400px"}, {queue: false})
        }
        else {
            $(".menu-controls").addClass("menu_hidden")
            $(this).find(".fa-angle-double-left").addClass("hidden")
            $(this).find(".fa-angle-double-right").removeClass("hidden")
            $(".js-tree-menu").animate({"left": "-370px"}, {queue: false})
            $(".unit-info").animate({"left": "-370px"}, {queue: false})
            $(".menu-controls").animate({"left": "0px"}, {queue: false})
            $(".standalone-content-wrapper").animate({"marginLeft": "0px"}, {queue: false})
        }
    })

    $(".unit-info").on("click", function() {
        if($(".menu-controls").css("display") == "none") {
            if ($(this).parent().find(".fa-angle-double-up").hasClass("hidden")) {
                $(this).parent().find(".fa-angle-double-up").removeClass("hidden")
                $(this).parent().find(".fa-angle-double-down").addClass("hidden")
                $(".js-tree-menu").animate({"maxHeight":"0px"}, {queue: false})
            }
            else {
                $(this).parent().find(".fa-angle-double-up").addClass("hidden")
                $(this).parent().find(".fa-angle-double-down").removeClass("hidden")
                $(".js-tree-menu").animate({"maxHeight":"500px"}, {queue: false})
            }
        }
    })

    $(window).on("resize", function() {
        if ($(this).width() >= 1570) {
            $(".js-tree-menu").removeAttr("style")
            if ($(".menu-controls").find(".fa-angle-double-left").hasClass("hidden")) {
                $(".menu-controls").addClass("menu_hidden")
                $(".js-tree-menu").css("left", "-370px")
            }
            else {
                $(".menu-controls").removeClass("menu_hidden")
                $(".js-tree-menu").css("left", "0px") 
            }
        }
    })

    $(".back-to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
    
})