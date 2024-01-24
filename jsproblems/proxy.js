const targetObject={
	name:`john`,
	age:30,
};
const handler={
	Get:function(target,property){
		console.log(`the getting property ${property} `);
		return target[property];
			},
	Set :function(target,property,value){
		console.log(`setting property${property} to ${value}`);
		target[property]=value;
		return true;
    }
}
const proxy = new Proxy(targetObject,handler);
console.log(proxy.name);
proxy.age=31;
console.log(targetObject.age);
