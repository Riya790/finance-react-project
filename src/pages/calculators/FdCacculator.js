import React, { useState, useEffect } from 'react';
import Graph from '../../components/Graph';
import SipHeader from '../../components/Header';
import SipInput from '../../components/Input';
import SipResult from '../../components/Result';

import { Box, Grid, Paper } from '@mui/material';

// import calculateSip from '../../calculator/sip';
// import calculateInvestment from '../../calculator/investment';
// import calculateGain from '../../calculator/gain';




const SipCalculator = () => {

    const calculateSip = (investment, annualRate, years) => {
        // let monthlyRate = annualRate/12/100;
        // let months = years * 12;
        //let futurevalue = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        let futurevalue = investment * Math.pow(1 + annualRate / 100, years);
    
        return futurevalue.toFixed(2);
    }

    const calculateGain = (totalValue, totalInvestment) => {
        console.log(totalValue - totalInvestment);
        return (totalValue - totalInvestment).toFixed(2);
    }
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [annualRate, setAnnualRate] = useState(12);
    const [years, setYears] = useState(1);
    const [totalValue, setTotalValue] = useState(0);
    const [totalInvestment, setTotalInvestment] = useState(0);
    const [totalGain, setTotalGain] = useState(0);

    // useEffect
    useEffect(() => {
        setTotalInvestment(monthlyInvestment);
        setTotalValue(calculateSip(monthlyInvestment, annualRate, years));
    }, [monthlyInvestment, annualRate, years]);

    useEffect(() => {
        setTotalGain(calculateGain(totalValue, totalInvestment));
    }, [totalValue, totalInvestment]);

    return (
        // <Grid container spacing={2}>
        //   <Grid item xs={12}>
        // <Paper elevation={3}>
        <Grid p={3} m={3}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12}>
                    <SipHeader 
                        name={'FD Calculator'}
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={6} spacing={3}>
                    <Grid item xs={12}>
                        <SipInput
                            monthlyInvestment={monthlyInvestment}
                            annualRate={annualRate}
                            years={years}
                            setMonthlyInvestment={setMonthlyInvestment}
                            setAnnualRate={setAnnualRate}
                            setYears={setYears}
                            name={'FdCal'}
                        />
                    </Grid>

                    <Grid item xs={12} mt={7}>
                        <SipResult totalValue={totalValue} />
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{ pl: 15 }}>
                        <Graph totalGain={totalGain} totalInvestment={totalInvestment} />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
        // </Paper>
        //   </Grid>
        // </Grid>
    );
};

export default SipCalculator;