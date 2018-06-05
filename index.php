<?php

require_once("countryCodeLists.php");

$three = explode("\n",$three);
$c = explode("\n",$c);

if(!isset($_POST['submit'])) {
?>
    <!doctype html>
    <!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
    <!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
    <!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
    <!--[if gt IE 8]><!-->
    <html class="no-js" lang="en">
    <!--<![endif]-->

    <head>
        <!--   
		Website designed by http://designquest.com.hk/
			  ___  ___ ___ ___ ___ _  _    ___  _   _ ___ ___ _____ 
			 |   \| __/ __|_ _/ __| \| |  / _ \| | | | __/ __|_   _|
			 | |) | _|\__ \| | (_ | .` | | (_) | |_| | _|\__ \ | |  
			 |___/|___|___/___\___|_|\_|  \__\_\\___/|___|___/ |_|  
		-->

        <meta charset="utf-8">
        <title>Magento Table Rates Generator - Design Quest</title>
        <meta name="description" content="Generate your table rates (tablerates.csv) for Magento shipping!"
        />
        <meta name="keywords" content="magento, table, rates, tablerates, tablerates.csv, magento, shipping, costs, generator"
        />
        <meta name="author" content="Elgentos Ecommerce Solutions" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <!--[if ie]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><![endif]-->
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="generator.css">

        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script type="text/javascript" src="javascript.js"></script>
    </head>

    <body>
        <h1>Magento Table Rates Generator</h1>

        <input type="button" name="button" onclick="checkCounties('asia')" value="Check all countries in Asia" />
        <br />

        <input type="button" name="button" onclick="checkCounties('na')" value="Check all countries in Northern America" />
        <br />

        <input type="button" name="button" onclick="checkCounties('americas')" value="Check all countries in Americas" />
        <br />

        <input type="button" name="button" onclick="checkCounties('europe')" value="Check all countries in Europe" />
        <br />

        <input type="button" name="button" onclick="checkCounties('oceania')" value="Check all countries in Oceania" />
        <br />

        <input type="button" name="button" onclick="checkCounties('africa')" value="Check all countries in Africa" />
        <br />
        <br />

        <input type="button" name="button" onclick="reset()" value="Reset checks">
        <br />

        <input type="button" name="button" onclick="clearValues()" value="Clear values for selected countries">
        <br />

        <br /> Default price:
        <input type="text" value="12.50" id="defPrice" name="defPrice"
        />
        <br />
        <input type="button" name="button" onclick="setDefPrice()" value="Set default Shipping Costs for checked countries"
        />
        <br />
        <br /> Table rates condition:
        <select id="carriers_tablerate_condition_name" name="carriers_tablerate_condition_name"
            onchange="changeLabel()">
            <option value="weight">Weight vs. Destination</option>
            <option value="price" selected="selected">Price vs. Destination</option>
            <option value="qty"># of Items vs. Destination</option>
        </select>
        <br /> Default From condition value:
        <input type="text" value="0" id="defSubtotal"
            name="defSubtotal" />
        <br />
        <input type="button" name="button" onclick="setdefSubtotal()" value="Set default condition value for checked countries"
        />
        <br />
        <br />
        <form action="" method="post">
            <ul>
                <li>
                    <table>
                        <tr>
                            <th style="width:250px;">Country</th>
                            <th>Shipping Costs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span
                                    id="conditionLabel">From subtotal</span>
                            </th>
                            <th>&nbsp;</th>
                        </tr>
                    </table>
                </li>
                <?php
foreach($three as $part) {
    $parts3 = explode(" - ",$part);
    $threes[$parts3[0]] = $parts3[1];
}

foreach($c as $d) {
    $parts = explode(" - ",$d);
    if(isset($_GET['twoLetterCodes'])) {
        $countryCode = $parts[0];
    } else {
        $countryCode = $threes[$parts[0]];
    }
    ?>
                    <li>
                        <table>
                            <tr>
                                <td style="width: 250px;">
                                    <input type='checkbox' name='country_<?=$countryCode;?>[]'
                                        value='<?=$countryCode;?>' id='country_<?=$countryCode;?>'
                                    />
                                    <label>
                                        <?=$parts[1];?>
                                    </label>
                                </td>
                                <td>$
                                    <input type="text" name="price_<?=$countryCode;?>[]"
                                    />&nbsp;&nbsp;
                                    <span class="euroCondition">$</span>
                                    <input type="text" name="from_<?=$countryCode;?>[]"
                                    />
                                </td>
                                <td>
                                    <a href="javascript:void()" class="addRow">+ Add row</a>
                            </tr>
                        </table>
                    </li>
                    <?php
}
?>
            </ul>
            <br />
            <input type="submit" name="submit" value="Generate tablerates.csv" />
            <small>&copy; 2012
                <a href="http://elgentos.nl" title="Elgentos Ecommerce Solutions"
                    alt="Elgentos Ecommerce Solutions">Elgentos Ecommerce Solutions</a>
            </small>
        </form>
    </body>

    </html>
    <?php } else {
    header("Content-Type: text/plain");
    header("Content-type: application/force-download");
    header("Content-Transfer-Encoding: Binary");
    header("Content-disposition: attachment; filename=\"tablerates.csv\"");
    if($_POST['carriers_tablerate_condition_name']=="weight") {
        $condition = "Weight (and price)";
    } elseif($_POST['carriers_tablerate_condition_name']=="price") {
        $condition = "Order Subtotal (and above)";
    } elseif($_POST['carriers_tablerate_condition_name']=="qty") {
        $condition = "# of Items (and above)";
    }
    echo "Country,Region/State,Zip/Postal Code,".$condition.",Shipping Price\n";
    foreach($_POST as $key=>$value) {
        if(stripos($key,"country_")!==false) {
            list($dummy,$country) = explode("_",$key);
            foreach($_POST['price_'.$country] as $key=>$price) {
                $price = $_POST['price_'.$country][$key];
                $from = $_POST['from_'.$country][$key];
                echo $country.",*,*,".$from.",".$price."\n";
            }
        }
    }
}
?>
