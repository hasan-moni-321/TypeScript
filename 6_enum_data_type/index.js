// 3 types of enum: 1. numeric type   2. string type   3. heterogenous type 
// numeric enum 
var numeric_enum_name;
(function (numeric_enum_name) {
    numeric_enum_name[numeric_enum_name["var_1"] = 2] = "var_1";
    numeric_enum_name[numeric_enum_name["var_2"] = 4] = "var_2";
    numeric_enum_name[numeric_enum_name["var_3"] = 5] = "var_3";
})(numeric_enum_name || (numeric_enum_name = {}));
console.log(numeric_enum_name);
console.log(numeric_enum_name.var_1);
console.log(numeric_enum_name.var_2);
console.log(numeric_enum_name["var_3"]);
// string enum 
var string_enum_name;
(function (string_enum_name) {
    string_enum_name["str_var_1"] = "hello";
    string_enum_name["str_var_2"] = "I am Hasan";
    string_enum_name["str_var_3"] = "Who are you?";
})(string_enum_name || (string_enum_name = {}));
console.log(string_enum_name);
console.log(string_enum_name.str_var_1);
console.log(string_enum_name.str_var_2);
console.log(string_enum_name["str_var_3"]);
var heterogenous_enum_name;
(function (heterogenous_enum_name) {
    heterogenous_enum_name[heterogenous_enum_name["var_1"] = 121] = "var_1";
    heterogenous_enum_name["var_2"] = "Moni";
    heterogenous_enum_name["var_3"] = "Hasan ID is 1522020009";
})(heterogenous_enum_name || (heterogenous_enum_name = {}));
console.log(heterogenous_enum_name);
console.log(heterogenous_enum_name.var_1);
console.log(heterogenous_enum_name.var_2);
console.log(heterogenous_enum_name['var_3']);
