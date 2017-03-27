/*
 * Matthew Colozzo
 */
let arr = []
module.exports = {
    set: function (id, data)
    {
        if(id == undefined || id == null || !(typeof id === 'string'))
        {
            throw "Enter a valid ID";
        }
        if(data == undefined || id == null)
        {
            throw "Enter valid data";
        }
        let exists = false;
        const item = {
            id: id,
            data: data
        };
        for(let i = 0; i < arr.length; i++)
        {
            if(arr[i].id == item.id)
            {
                arr[i] = item;
                exists = true;
                break;
            }
        }
        if(exists == false)
        {
            arr.push(item);
        }
        return item;
    },
    unset: function (id)
    {
        if(id == undefined || id == null || !(typeof id === 'string'))
        {
            throw "Enter a valid ID in order to remove data";
        }
        let found = false;
        for(let i = 0; i < arr.length; i++)
        {
            if(arr[i].id == id)
            {
                arr.splice(i,1);
                found = true;
            }
        }
        if(found == false)
        {
            throw "No data with given ID to remove";
        }
    },
    get: function (id)
    {
        if(id == undefined || id == null || !(typeof id === 'string'))
        {
            throw "Enter an ID in order to get data";
        }
        let found = false;
        let d;
        for(let i = 0; i < arr.length; i++)
        {
            if(arr[i].id == id)
            {
                d = arr[i].data;
                found = true;
                break;
            }
        }
        if(found == true)
        {
            return d;
        }
        else
        {
            throw "No data with given ID to get";
        }
    }
};
