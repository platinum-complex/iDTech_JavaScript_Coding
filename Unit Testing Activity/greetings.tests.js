function Greet(names) 
{
    if(names=='')
    {
        return("Hello there!");
    }
    else
    {
        if (typeof names === 'string')
        {
            let capsNames = names.toUpperCase();
            if(names===capsNames)
            {
                return("HELLO " + names + "!");
            }
            else
            {
                return("Hello, " + names);
            }
        }
        else if (Array.isArray(names)) 
        {
            const toGreet = names.join(', ');
            return("Hello, " + toGreet);
        }
    }
}

describe('test greetings()', function ()
{
    it('should work', function ()
    {
        expect(Greet("Elizabeth")).toEqual("Hello, Elizabeth");
        expect(Greet('')).toEqual("Hello there!");
        expect(Greet("JOSE")).toEqual("HELLO JOSE!");
        expect(Greet(['Jose','Pep'])).toEqual("Hello, Jose, Pep");
        expect(Greet(['Alex','Arsene','Jose','Zidane'])).toEqual("Hello, Alex, Arsene, Jose, Zidane");
    });
});