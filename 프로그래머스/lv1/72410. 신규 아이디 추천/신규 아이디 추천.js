function solution(new_id) {
    let id = new_id
     .toLowerCase() //step 1
    .replace(/[^\w._-]/g, "") // step 2
    .replace(/\.+/g, ".") //step 3
    .replace(/^\.|\.$/g, "") //step 4
    .replace(/^$/, "a") //step 5
    .slice(0, 15)
    .replace(/\.$/, ""); //step 6
    
    if(id.length === 1) id = id[0].repeat(3)
    if(id.length === 2) id += id[1]
    return id
}