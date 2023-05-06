// 3 types of enum: 1. numeric type   2. string type   3. heterogenous type 


// numeric enum 

enum numeric_enum_name {
    var_1 = 2,
    var_2 = 4, 
    var_3, 
}

console.log(numeric_enum_name); 
console.log(numeric_enum_name.var_1); 
console.log(numeric_enum_name.var_2);
console.log(numeric_enum_name["var_3"]); 



// string enum 
enum string_enum_name {
    str_var_1 = 'hello',
    str_var_2 = 'I am Hasan', 
    str_var_3 = 'Who are you?'
}

console.log(string_enum_name)
console.log(string_enum_name.str_var_1); 
console.log(string_enum_name.str_var_2); 
console.log(string_enum_name["str_var_3"]);  

enum heterogenous_enum_name {
    var_1 = 121,
    var_2 = "Moni",
    var_3 = "Hasan ID is 1522020009" 
}

console.log(heterogenous_enum_name)
console.log(heterogenous_enum_name.var_1)
console.log(heterogenous_enum_name.var_2)
console.log(heterogenous_enum_name['var_3']); 