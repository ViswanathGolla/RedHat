# RedHat
RedHat Questionaries

Based on my expections i have fixed issues as there is no expectations mentioned in Questionaries. 

Question 1: I found, callback function is get called twice if any error occurred in doThing() that is wrong. I have fixed it to call only once. 

Question 2: I found that, callOneService() and callTwoService() method are implemented to make asynchronous call and returning asynchrounous call result. 

My findings
I feel, you are expecting Correct answer when remoteMathService() method called.

1. Basic issue is, remoteMathService() method call is always returning wronganswer because one and two variables are get set after remoteMathService() is return value. Hence I fixed it by removing asynchronous call behaviour. I can still use return option in callOneService() and callTwoService() method after removing setTimeOut but that returning function is not used anywhere in remoteMathService(). Hence, i removed it.

2. I have achieved Correct answer by setTimeOut call but I am calling functions immediately rather waiting so, setTimeOut basic feature is missed here. But this is one of the way. The returing value to setTimeOut does not return back to remoteMathService() hence, i removed it. To return values from setTimeOut there are some other options but i donot  feel that is your expectation.

3. I have provided JUNIT test case to test the fix by using QUNIT. 


Question 3: I feel you are expection is db.Connect should be called 10 times until it is connected. Hence, i have used recursive way to fix this.  


I have provided test html for all 3 questions to verify the result. Check console log after running every html to see the result
