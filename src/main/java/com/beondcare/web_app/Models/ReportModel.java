package com.beondcare.web_app.Models;

import com.beondcare.web_app.Services.ReportService;
import com.beondcare.web_app.repository.ReceiverRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Data

public class ReportModel {

    public ReportModel(int psum,int rsum){
        setPsum(psum);
        setRsum(rsum);
        setSum(getPsum()+getRsum());
    }
    private  int psum;
    private  int rsum;
    private  int sum;


}
