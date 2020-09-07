package com.beondcare.web_app.Services;

import com.beondcare.web_app.Models.ReportModel;
import com.beondcare.web_app.repository.JobRepository;
import com.beondcare.web_app.repository.PaymentRepository;
import com.beondcare.web_app.repository.ProviderRepository;
import com.beondcare.web_app.repository.ReceiverRepository;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.List;

@Service
public class ReportService {
    @Autowired
    PaymentRepository paymentRepository;
    @Autowired
    ProviderRepository providerRepository;
    @Autowired
    ReceiverRepository  receiverRepository;
    @Autowired
    JobRepository jobRepository;

    public ByteArrayResource  generateReportData() throws FileNotFoundException, JRException {
        int count1 = paymentRepository.findByType(1).size();
        int count2 = paymentRepository.findByType(2).size();


        int pcount = providerRepository.findAll().size();
        int rcount = receiverRepository.findAll().size();
        int jcount = jobRepository.findAll().size();

        ReportModel data=new ReportModel(
                count1*2000,
                count2*2000
        );

        List<ReportModel> dataList= Arrays.asList(data);

        File file = ResourceUtils.getFile("classpath:reportModels/report.jrxml");
        JasperReport report= JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource dataSource=new JRBeanCollectionDataSource(dataList);
        JasperPrint jasperPrint = JasperFillManager.fillReport(
                report, null,dataSource);
        return new ByteArrayResource(JasperExportManager.exportReportToPdf(jasperPrint));
//        JasperExportManager.exportReportToPdfFile(jasperPrint,"C:\\Users\\ukavi\\OneDrive\\Desktop\\report\\rtest.pdf");

    }


}
