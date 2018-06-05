var asia = ["AFG", "ARM", "AZE", "BHR", "BGD", "BTN", "BRN", "KHM", "CHN", "CYP", "GEO", "HKG", "IND", "IDN", "IRN", "IRQ", "ISR", "JPN", "JOR", "KAZ", "PRK", "KOR", "KWT", "KGZ", "LAO", "LBN", "MAC", "MYS", "MDV", "MNG", "MMR", "NPL", "OMN", "PAK", "PSE", "PHL", "QAT", "SAU", "SGP", "LKA", "SYR", "TWN", "TJK", "THA", "TLS", "TUR", "TKM", "ARE", "UZB", "VNM", "YEM"];
var americas = ["AIA", "ATG", "ARG", "ABW", "BHS", "BRB", "BLZ", "BMU", "BOL", "BES", "BVT", "BRA", "CAN", "CYM", "CHL", "COL", "CRI", "CUB", "CUW", "DMA", "DOM", "ECU", "SLV", "FLK", "GUF", "GRL", "GRD", "GLP", "GTM", "GUY", "HTI", "HND", "JAM", "MTQ", "MEX", "MSR", "NIC", "PAN", "PRY", "PER", "PRI", "BLM", "KNA", "LCA", "MAF", "SPM", "VCT", "SXM", "SGS", "SUR", "TTO", "TCA", "USA", "URY", "VEN", "VGB", "VIR"];
var na = ["BMU", "CAN", "GRL", "SPM", "USA"];
var europe = ["ALA", "ALB", "AND", "AUT", "BLR", "BEL", "BIH", "BGR", "HRV", "CZE", "DNK", "EST", "FRO", "FIN", "FRA", "DEU", "GIB", "GRC", "GGY", "VAT", "HUN", "ISL", "IRL", "IMN", "ITA", "JEY", "LVA", "LIE", "LTU", "LUX", "MKD", "MLT", "MDA", "MCO", "MNE", "NLD", "NOR", "POL", "PRT", "ROU", "RUS", "SMR", "SRB", "SVK", "SVN", "ESP", "SJM", "SWE", "CHE", "UKR", "GBR", ];
var oceania = ["ASM", "AUS", "CXR", "CCK", "COK", "FJI", "PYF", "GUM", "HMD", "KIR", "MHL", "FSM", "NRU", "NCL", "NZL", "NIU", "NFK", "MNP", "PLW", "PNG", "PCN", "WSM", "SLB", "TKL", "TON", "TUV", "UMI", "VUT", "WLF"];
var africa = ["DZA", "AGO", "BEN", "BWA", "IOT", "BFA", "BDI", "CPV", "CMR", "CAF", "TCD", "COM", "COG", "COD", "CIV", "DJI", "EGY", "GNQ", "ERI", "ETH", "ATF", "GAB", "GMB", "GHA", "GIN", "GNB", "KEN", "LSO", "LBR", "LBY", "MDG", "MWI", "MLI", "MRT", "MUS", "MYT", "MAR", "MOZ", "NAM", "NER", "NGA", "REU", "RWA", "SHN", "STP", "SEN", "SYC", "SLE", "SOM", "ZAF", "SSD", "SDN", "SWZ", "TZA", "TGO", "TUN", "UGA", "ESH", "ZMB", "ZWE"];

function checkCounties(region) {
    var countries = [];
    switch (region) {
        case 'asia':
            countries = asia;
            break;
        case 'americas':
            countries = americas;
            break;
        case 'na':
            countries = na;
            break;
        case 'europe':
            countries = europe;
            break;
        case 'oceania':
            countries = oceania;
            break;
        case 'africa':
            countries = africa;
            break;
        default:
            console.error('Wrong region', region);
            break;
    }
    for (i = 0; i < countries.length; i++) {
        $("input[value='" + countries[i] + "']").attr('checked', 'checked');
    }
}

function clearValues() {
    $("input:checked").each(function (index, element) {
        e = $(element).val();
        $("input[name^='price_" + e + "']").val('');
        $("input[name^='from_" + e + "']").val('');
    });
}

function checkOutsideEU() {
    // if(document.location.href.indexOf("twoLetterCodes")>0) {
    var EU = new Array("BE", "BG", "CY", "DK", "DE", "EE", "FI", "FR", "GR", "HU", "HR", "IR", "IT", "LV", "LT", "LU", "MT", "NL", "AT", "PL", "PT", "RO", "SK", "SI", "ES", "CZ", "GB", "SE");
    // } else {
    //     var EU = new Array("BEL","BGR","CYP","DNK","DEU","EST","FIN","FRA","GRC","HUN","HRV","IRN","ITA","LVA","LTU","LUX","MLT","NLD","AUT","POL","PRT","ROU","SVK","SVN","ESP","CZE","GBR","SWE");
    // }
    /*for(i=0;i<EU.length;i++) {
        $("input[value='"+EU[i]+"']").attr('checked','checked');
    }*/
    $("input[name^='country_']").each(function (index, element) {
        if (EU.indexOf($(element).val()) === -1) {
            $(element).attr('checked', 'checked');
        }
    });
}

function checkOutsideEuro() {
    // if(document.location.href.indexOf("twoLetterCodes")>0) {
    var EU = new Array("AL", "AD", "AM", "AT", "AZ", "BY", "BE", "BA", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "GE", "DE", "GR", "HU", "IS", "IE", "IT", "KZ", "LV", "LI", "LT", "LU", "MK", "MT", "MD", "MC", "ME", "NL", "NO", "PL", "PT", "RO", "RU", "SM", "RS", "SK", "SI", "ES", "SE", "CH", "TR", "UA", "GB", "VA");
    // } else {
    //     var EU = new Array("ALB","AND","ARM","AUT","AZE","BLR","BEL","BIH","BGR","HRV","CYP","CZE","DNK","EST","FIN","FRA","GEO","DEU","GRC","HUN","ISL","IRL","ITA","KAZ","LVA","LIE","LTU","LUX","MKD","MLT","MDA","MCO","MNE","NLD","NOR","POL","PRT","ROU","RUS","SMR","SRB","SVK","SVN","ESP","SWE","CHE","TUR","UKR","GBR","VAT");
    // }
    /*for(i=0;i<EU.length;i++) {
        $("input[value='"+EU[i]+"']").attr('checked','checked');
    }*/
    $("input[name^='country_']").each(function (index, element) {
        if (EU.indexOf($(element).val()) === -1) {
            $(element).attr('checked', 'checked');
        }
    });
}

function reset() {
    $("input[name^='country_']").each(function (index, element) {
        $(element).removeAttr('checked');
    });
}

function checkEuro() {
    // if(document.location.href.indexOf("twoLetterCodes")>0) {
    var EU = new Array("AL", "AD", "AM", "AT", "AZ", "BY", "BE", "BA", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "GE", "DE", "GR", "HU", "IS", "IE", "IT", "KZ", "LV", "LI", "LT", "LU", "MK", "MT", "MD", "MC", "ME", "NL", "NO", "PL", "PT", "RO", "RU", "SM", "RS", "SK", "SI", "ES", "SE", "CH", "TR", "UA", "GB", "VA");
    // } else {
    //     var EU = new Array("ALB","AND","ARM","AUT","AZE","BLR","BEL","BIH","BGR","HRV","CYP","CZE","DNK","EST","FIN","FRA","GEO","DEU","GRC","HUN","ISL","IRL","ITA","KAZ","LVA","LIE","LTU","LUX","MKD","MLT","MDA","MCO","MNE","NLD","NOR","POL","PRT","ROU","RUS","SMR","SRB","SVK","SVN","ESP","SWE","CHE","TUR","UKR","GBR","VAT");
    // }
    for (i = 0; i < EU.length; i++) {
        $("input[value='" + EU[i] + "']").attr('checked', 'checked');
    }
}

function setDefPrice() {
    $("input:checked").each(function (index, elmnt) {
        $(elmnt).parent().parent().find("input[name*=price]").val($("#defPrice").val());
    });
}

function setdefSubtotal() {
    $("input:checked").each(function (index, elmnt) {
        $(elmnt).parent().parent().find("input[name*=from]").val($("#defSubtotal").val());
    });
}

$(window).ready(function () {
    $("a.addRow").live('click', function () {
        row = $(this).parent().parent().parent().parent().parent().html();
        row = row.replace("<a href=\"javascript:void()\" class=\"addRow\">+ Add row</a>", "");
        $(this).parent().parent().parent().parent().parent().after(row);
    });
    $("label").live('click', function () {
        checked = $(this).parent().find('input').attr('checked');
        if (checked == 'checked') {
            $(this).parent().find('input').removeAttr('checked');
        } else {
            $(this).parent().find('input').attr('checked', 'checked');
        }
    });
});

function addRowSelectedCountries() {
    $("input:checked").each(function (index, element) {
        li = $(element).closest('li');
        li.find('a.addRow').click();
    });
}

function changeLabel() {
    var condition = $("#carriers_tablerate_condition_name").val();
    if (condition == "weight") {
        var label = "From weight";
        $(".euroCondition").hide();
    } else if (condition == "price") {
        var label = "From subtotal";
        $(".euroCondition").show();
    } else if (condition == "qty") {
        var label = "From quantity";
        $(".euroCondition").hide();
    }
    $("#conditionLabel").html(label);
}