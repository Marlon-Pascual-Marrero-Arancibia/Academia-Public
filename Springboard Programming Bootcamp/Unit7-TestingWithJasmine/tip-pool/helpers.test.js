it('should calculate the payment total', function()
{
    expect(sumPaymentTotal(tipAmt)).toEqual(0);
});

it('should calculate tip percentage', function()
    {
        expect(calculateTipPercent(100,1)).toEqual(1);
        expect(calculateTipPercent(50,0.5)).toEqual(1);
        expect(calculateTipPercent(50,0.25)).toEqual(1);
    }
);

it('should append TD', function()
    {
        let tr = document.querySelector("tbody#servers"); 
        appendTd(tr,"example");
    }
);