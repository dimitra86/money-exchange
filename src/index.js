// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    var P =1, N = 5, D = 10, Q=25, H=50;
    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else if (currency>0) {
        H2=currency/H;
        H3=H2^0;
        if(H3<1){
                        currency2=currency-(H3*H);

                    Q2=currency2/Q;
                    Q3=Q2^0;
                    if (Q3<1){
                                currency3=currency2-(Q3*Q);

                            D2=currency3/D;
                            D3=D2^0;
                            if (D3<1) {
                                currency4=currency3-(D3*D);

                                N2=currency4/N;
                                N3=N2^0;
                                if (N3<1){
                                    currency5=currency4-(N3*N);

                                    P2=currency5/P;
                                    P3=P2^0;
                                    if(P3<1){
                                        return{};
                                    }
                                    else{
                                    return{"P":P3};
                                }
                                }
                                else {
                                    currency5=currency4-(N3*N);
                                    P2=currency5/P;
                                    P3=P2^0;
                                    if(P3<1){
                                    return{"N":N3};
                                    }
                                else{
                                    return{"N":N3,"P":P3};
                                }
                            }
                            }
                            else{
                                currency4=currency3-(D3*D);
                                N2=currency4/N;
                            N3=N2^0;
                            if (N3<1){
                                currency5=currency4-(N3*N);

                                P2=currency5/P;
                                P3=P2^0;
                                if(P3<1){
                                    return{"D":D3};
                                }
                                else{
                                return{"D":D3,"P":P3};
                                }
                                }
                            else {
                                currency5=currency4-(N3*N);
                                P2=currency5/P;
                                P3=P2^0;
                                if(P3<1){
                                return{"D":D3,"N":N3};
                                }
                                else{
                                    return{"D":D3,"N":N3,"P":P3};
                                }
                            }
                            }
                            }
                    
                    else{  
                        currency3=currency2-(Q3*Q);

                    D2=currency3/D;
                    D3=D2^0;
                    if (D3<1) {
                        currency4=currency3-(D3*D);

                        N2=currency4/N;
                        N3=N2^0;
                        if (N3<1){
                            currency5=currency4-(N3*N);

                            P2=currency5/P;
                            P3=P2^0;
                            if(P3<1){
                                return{"Q":Q3};
                            }
                            else{
                            return{"Q":Q3,"P":P3};
                        }
                        }
                        else {
                            currency5=currency4-(N3*N);
                            P2=currency5/P;
                            P3=P2^0;
                            if(P3<1){
                            return{"Q":Q3,"N":N3};
                            }
                        else{
                            return{"Q":Q3,"N":N3,"P":P3};
                        }
                    }
                    }
                    else{
                        currency4=currency3-(D3*D);
                        N2=currency4/N;
                    N3=N2^0;
                    if (N3<1){
                        currency5=currency4-(N3*N);

                        P2=currency5/P;
                        P3=P2^0;
                        if(P3<1){
                            return{"Q":Q3,"D":D3};
                        }
                        else{
                        return{"Q":Q3,"D":D3,"P":P3};
                        }
                        }
                    else {
                        currency5=currency4-(N3*N);
                        P2=currency5/P;
                        P3=P2^0;
                        if(P3<1){
                        return{"Q":Q3,"D":D3,"N":N3};
                        }
                        else{
                            return{"Q":Q3,"D":D3,"N":N3,"P":P3};
                        }
                    }
                    }

                    }
                    }


        else {
            currency2=currency-(H3*H);

        Q2=currency2/Q;
        Q3=Q2^0;
        if (Q3<1){
                    currency3=currency2-(Q3*Q);

                D2=currency3/D;
                D3=D2^0;
                if (D3<1) {
                    currency4=currency3-(D3*D);

                    N2=currency4/N;
                    N3=N2^0;
                    if (N3<1){
                        currency5=currency4-(N3*N);

                        P2=currency5/P;
                        P3=P2^0;
                        if(P3<1){
                            return{"H":H3};
                        }
                        else{
                        return{"H":H3,"P":P3};
                    }
                    }
                    else {
                        currency5=currency4-(N3*N);
                        P2=currency5/P;
                        P3=P2^0;
                        if(P3<1){
                        return{"H":H3,"N":N3};
                        }
                    else{
                        return{"H":H3,"N":N3,"P":P3};
                    }
                }
                }
                else{
                    currency4=currency3-(D3*D);
                    N2=currency4/N;
                N3=N2^0;
                if (N3<1){
                    currency5=currency4-(N3*N);

                    P2=currency5/P;
                    P3=P2^0;
                    if(P3<1){
                        return{"H":H3,"D":D3};
                    }
                    else{
                    return{"H":H3,"D":D3,"P":P3};
                    }
                    }
                else {
                    currency5=currency4-(N3*N);
                    P2=currency5/P;
                    P3=P2^0;
                    if(P3<1){
                    return{"H":H3,"D":D3,"N":N3};
                    }
                    else{
                        return{"H":H3,"D":D3,"N":N3,"P":P3};
                    }
                }
                }
                }
        
        else{  
            currency3=currency2-(Q3*Q);

        D2=currency3/D;
        D3=D2^0;
        if (D3<1) {
            currency4=currency3-(D3*D);

            N2=currency4/N;
            N3=N2^0;
            if (N3<1){
                currency5=currency4-(N3*N);

                P2=currency5/P;
                P3=P2^0;
                if(P3<1){
                    return{"H":H3,"Q":Q3};
                }
                else{
                return{"H":H3,"Q":Q3,"P":P3};
            }
            }
            else {
                currency5=currency4-(N3*N);
                P2=currency5/P;
                P3=P2^0;
                if(P3<1){
                return{"H":H3,"Q":Q3,"N":N3};
                }
            else{
                return{"H":H3,"Q":Q3,"N":N3,"P":P3};
            }
        }
        }
        else{
            currency4=currency3-(D3*D);
            N2=currency4/N;
        N3=N2^0;
        if (N3<1){
            currency5=currency4-(N3*N);

            P2=currency5/P;
            P3=P2^0;
            if(P3<1){
                return{"H":H3,"Q":Q3,"D":D3};
            }
            else{
             return{"H":H3,"Q":Q3,"D":D3,"P":P3};
            }
            }
        else {
            currency5=currency4-(N3*N);
            P2=currency5/P;
            P3=P2^0;
            if(P3<1){
             return{"H":H3,"Q":Q3,"D":D3,"N":N3};
            }
            else{
                return{"H":H3,"Q":Q3,"D":D3,"N":N3,"P":P3};
            }
        }
        }

        }
        }

        

        
        
    }
    else{
        return {};
    }

}