

import java.awt.BorderLayout;
import java.io.BufferedOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import javax.swing.DefaultComboBoxModel;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JTextField;
import javax.swing.filechooser.FileNameExtensionFilter;
import javax.swing.table.DefaultTableModel;
import net.proteanit.sql.DbUtils;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import net.sf.jasperreports.swing.JRViewer;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jdesktop.swingx.autocomplete.AutoCompleteDecorator;
public class viewinc extends javax.swing.JFrame
{


    public viewinc() {
        initComponents();
        item();
       setExtendedState(JFrame.MAXIMIZED_BOTH);
       AutoCompleteDecorator.decorate(inv);
      
    }


    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        repos = new javax.swing.JFrame();
        pan = new javax.swing.JPanel();
        jPanel1 = new javax.swing.JPanel();
        track2 = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        t1 = new javax.swing.JTable();
        eamt = new javax.swing.JTextField();
        lbl3 = new javax.swing.JLabel();
        lbl1 = new javax.swing.JLabel();
        lbl2 = new javax.swing.JLabel();
        back = new javax.swing.JButton();
        clear = new javax.swing.JButton();
        back1 = new javax.swing.JButton();
        lbl8 = new javax.swing.JLabel();
        lbl7 = new javax.swing.JLabel();
        to = new com.toedter.calendar.JDateChooser();
        from = new com.toedter.calendar.JDateChooser();
        month = new javax.swing.JButton();
        clear1 = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();
        inv = new javax.swing.JComboBox<>();
        jButton1 = new javax.swing.JButton();
        clear3 = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();

        repos.setMinimumSize(new java.awt.Dimension(1000, 1000));
        repos.getContentPane().add(pan, java.awt.BorderLayout.CENTER);

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setMinimumSize(new java.awt.Dimension(1000, 1000));
        getContentPane().setLayout(null);

        jPanel1.setBackground(new java.awt.Color(255, 51, 51));
        jPanel1.setLayout(null);

        track2.setBackground(new java.awt.Color(255, 51, 51));
        track2.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        track2.setForeground(new java.awt.Color(255, 255, 255));
        track2.setText("Day Bill");
        track2.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED));
        track2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                track2ActionPerformed(evt);
            }
        });
        jPanel1.add(track2);
        track2.setBounds(1000, 110, 150, 40);

        t1.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null},
                {null, null, null, null}
            },
            new String [] {
                "Title 1", "Title 2", "Title 3", "Title 4"
            }
        ));
        jScrollPane1.setViewportView(t1);

        jPanel1.add(jScrollPane1);
        jScrollPane1.setBounds(10, 300, 1290, 290);

        eamt.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        jPanel1.add(eamt);
        eamt.setBounds(790, 220, 190, 30);

        lbl3.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        lbl3.setForeground(new java.awt.Color(255, 255, 255));
        lbl3.setText("Total Invoice:");
        jPanel1.add(lbl3);
        lbl3.setBounds(630, 220, 160, 30);

        lbl1.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        lbl1.setForeground(new java.awt.Color(255, 255, 255));
        lbl1.setText("From Date:");
        jPanel1.add(lbl1);
        lbl1.setBounds(660, 110, 120, 30);

        lbl2.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        lbl2.setForeground(new java.awt.Color(255, 255, 255));
        lbl2.setText("To Date:");
        jPanel1.add(lbl2);
        lbl2.setBounds(690, 170, 90, 30);

        back.setBackground(new java.awt.Color(255, 51, 51));
        back.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        back.setForeground(new java.awt.Color(255, 255, 255));
        back.setText("Exit");
        back.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED));
        back.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                backActionPerformed(evt);
            }
        });
        jPanel1.add(back);
        back.setBounds(860, 630, 140, 40);

        clear.setBackground(new java.awt.Color(255, 51, 51));
        clear.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        clear.setForeground(new java.awt.Color(255, 255, 255));
        clear.setText("Clear");
        clear.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED));
        clear.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                clearActionPerformed(evt);
            }
        });
        jPanel1.add(clear);
        clear.setBounds(990, 230, 140, 40);

        back1.setBackground(new java.awt.Color(255, 51, 51));
        back1.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        back1.setForeground(new java.awt.Color(255, 255, 255));
        back1.setText("Back");
        back1.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED));
        back1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                back1ActionPerformed(evt);
            }
        });
        jPanel1.add(back1);
        back1.setBounds(660, 630, 150, 40);

        lbl8.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        lbl8.setForeground(new java.awt.Color(255, 255, 255));
        lbl8.setText("Invoice Table:");
        jPanel1.add(lbl8);
        lbl8.setBounds(20, 260, 160, 30);

        lbl7.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        lbl7.setForeground(new java.awt.Color(51, 255, 255));
        lbl7.setText("Monthly Invoice Details");
        jPanel1.add(lbl7);
        lbl7.setBounds(660, 40, 250, 40);

        to.setDateFormatString("dd/MM/yyyy");
        jPanel1.add(to);
        to.setBounds(790, 170, 187, 30);

        from.setDateFormatString("dd/MM/yyyy");
        jPanel1.add(from);
        from.setBounds(790, 110, 187, 29);

        month.setBackground(new java.awt.Color(255, 51, 51));
        month.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        month.setForeground(new java.awt.Color(255, 255, 255));
        month.setText("Monthly");
        month.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED));
        month.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                monthActionPerformed(evt);
            }
        });
        jPanel1.add(month);
        month.setBounds(1000, 170, 140, 40);

        clear1.setBackground(new java.awt.Color(255, 51, 51));
        clear1.setFont(new java.awt.Font("Times New Roman", 1, 20)); // NOI18N
        clear1.setForeground(new java.awt.Color(255, 255, 255));
        clear1.setText("View Single Bill");
        clear1.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED));
        clear1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                clear1ActionPerformed(evt);
            }
        });
        jPanel1.add(clear1);
        clear1.setBounds(190, 170, 180, 40);

        jLabel1.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(255, 255, 255));
        jLabel1.setText("Invoice No:");
        jPanel1.add(jLabel1);
        jLabel1.setBounds(20, 130, 117, 30);

        inv.setFont(new java.awt.Font("Times New Roman", 1, 18)); // NOI18N
        inv.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Please Select Invoice No:" }));
        inv.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                invActionPerformed(evt);
            }
        });
        jPanel1.add(inv);
        inv.setBounds(140, 130, 230, 30);

        jButton1.setBackground(new java.awt.Color(255, 51, 51));
        jButton1.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        jButton1.setForeground(new java.awt.Color(255, 255, 255));
        jButton1.setText("Download");
        jButton1.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED));
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });
        jPanel1.add(jButton1);
        jButton1.setBounds(470, 630, 150, 40);

        clear3.setBackground(new java.awt.Color(255, 51, 51));
        clear3.setFont(new java.awt.Font("Times New Roman", 1, 24)); // NOI18N
        clear3.setForeground(new java.awt.Color(255, 255, 255));
        clear3.setText("Delete");
        clear3.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED));
        clear3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                clear3ActionPerformed(evt);
            }
        });
        jPanel1.add(clear3);
        clear3.setBounds(1190, 110, 130, 40);

        jLabel2.setForeground(new java.awt.Color(255, 255, 255));
        jLabel2.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Images/background.jpg"))); // NOI18N
        jPanel1.add(jLabel2);
        jLabel2.setBounds(0, 0, 1900, 970);

        getContentPane().add(jPanel1);
        jPanel1.setBounds(0, 0, 2120, 1250);

        pack();
    }// </editor-fold>//GEN-END:initComponents
public void day()
{
      String i= ((JTextField) from.getDateEditor().getUiComponent()).getText();
      
 
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jesh","root","hitech");
            String sql="Select sum(total) from billing where Date='"+i+"' ";
            PreparedStatement pst=con.prepareStatement(sql);
            ResultSet rs=pst.executeQuery();
            if(rs.next())
            {
                String sum=rs.getString("sum(total)");
                eamt.setText(sum);
            }
        }
        catch(Exception e)
        {
            JOptionPane.showMessageDialog(null,e);
        }
}
    private void track2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_track2ActionPerformed
        String i= ((JTextField) from.getDateEditor().getUiComponent()).getText();
      
           t1.setVisible(true);
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jesh","root","hitech");
            String sql="Select bno,date,name,contact,Address,cgst,sgst,tax,subtotal from billing where Date='"+i+"'";
            PreparedStatement pst=con.prepareStatement(sql);
            ResultSet rs=pst.executeQuery();
            t1.setModel(DbUtils.resultSetToTableModel(rs));

        }
        catch(ClassNotFoundException | SQLException e)
        {
            JOptionPane.showMessageDialog(null,e);
        }   
        day();
      
    }//GEN-LAST:event_track2ActionPerformed

    public void month()
    {
          String i= ((JTextField) from.getDateEditor().getUiComponent()).getText();
        String j= ((JTextField) to.getDateEditor().getUiComponent()).getText();
 
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jesh","root","hitech");
            String sql="Select sum(total) from billing where Date between '"+i+"' and '"+j+"'";
            PreparedStatement pst=con.prepareStatement(sql);
            ResultSet rs=pst.executeQuery();
            if(rs.next())
            {
                String sum=rs.getString("sum(total)");
                eamt.setText(sum);
            }
        }
        catch(Exception e)
        {
            JOptionPane.showMessageDialog(null,e);
        }
    }
    private void backActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_backActionPerformed
        dispose();
    }//GEN-LAST:event_backActionPerformed

    private void clearActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_clearActionPerformed
        t1.setVisible(false);
       eamt.setText("");
     
    }//GEN-LAST:event_clearActionPerformed

    private void back1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_back1ActionPerformed
        // TODO add your handling code here:
       Menu o=new Menu();
        o.setVisible(true);
        dispose();
    }//GEN-LAST:event_back1ActionPerformed

    private void monthActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_monthActionPerformed
  String i= ((JTextField) from.getDateEditor().getUiComponent()).getText();
        String j= ((JTextField) to.getDateEditor().getUiComponent()).getText();
           t1.setVisible(true);
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jesh","root","hitech");
            String sql="Select bno,date,name,contact,Address,cgst,sgst,tax,subtotal from billing where Date between '"+i+"' and '"+j+"'";
            PreparedStatement pst=con.prepareStatement(sql);
            ResultSet rs=pst.executeQuery();
            t1.setModel(DbUtils.resultSetToTableModel(rs));

        }
        catch(ClassNotFoundException | SQLException e)
        {
            JOptionPane.showMessageDialog(null,e);
        } 
        month();
    }//GEN-LAST:event_monthActionPerformed

    private void clear1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_clear1ActionPerformed
           t1.setVisible(true);
        report();
    }//GEN-LAST:event_clear1ActionPerformed

     public void item()
{
   
       String sql="Select * from billing";
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jesh","root","hitech");
            PreparedStatement pst=con.prepareStatement(sql);

            ResultSet rs=pst.executeQuery();
            while(rs.next())
            {
                inv.addItem(rs.getString("bno"));
            }
        }
        catch(Exception e)
        {
            JOptionPane.showMessageDialog(null,e);
        }
}
    
    public void report()  
{repos.setVisible(true);
   
  Connection con; 
    try{
    Class.forName("com.mysql.jdbc.Driver");
    con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jesh","root","hitech");
    HashMap a=new HashMap();
    String x=inv.getSelectedItem().toString();
    a.put("invo",x);
    pan.removeAll();;
    pan.repaint();
    pan.revalidate();
    
    JasperDesign jd=JRXmlLoader.load("src\\report1.jrxml");
    JasperReport jr=JasperCompileManager.compileReport(jd);
    JasperPrint jp=JasperFillManager.fillReport(jr,a,con);
    JRViewer v=new JRViewer(jp);
    pan.setLayout(new BorderLayout());
    pan.add(v);
    }
    catch(ClassNotFoundException | SQLException | JRException e)
    {
        JOptionPane.showMessageDialog(null,e);
    }
}
   
    private void invActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_invActionPerformed
        
     
    }//GEN-LAST:event_invActionPerformed

    
            
    
    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
 JFileChooser ef = new JFileChooser();
        FileNameExtensionFilter ext = new FileNameExtensionFilter("xls", "xlsx", "EXCEL FILES");
        ef.setFileFilter(ext);
        int ex = ef.showSaveDialog(null);
        if (ex == JFileChooser.APPROVE_OPTION) {
            FileOutputStream efu = null;
            BufferedOutputStream ebu = null;
            XSSFWorkbook ete = null;
            try {
                ete = new XSSFWorkbook();
                XSSFSheet es = ete.createSheet("Table Sheet");
                
                for (int l = 0; l < t1.getRowCount(); l++) {
                    XSSFRow er = es.createRow(0);
                    for (int m = 0; m < t1.getColumnCount(); m++) {
                        
                        XSSFCell ec = er.createCell(m);
                        ec.setCellValue(t1.getColumnName(m));
                    }
                }
                for (int l = 0; l < t1.getRowCount(); l++) {
                    XSSFRow er = es.createRow(l+1);
                    for (int m = 0; m < t1.getColumnCount(); m++) {
                        
                        XSSFCell ec = er.createCell(m);
                        ec.setCellValue(t1.getValueAt(l, m).toString());
                    }
                }
                efu = new FileOutputStream(ef.getSelectedFile() + ".xlsx");
                ebu = new BufferedOutputStream(efu);
                ete.write(ebu);
                JOptionPane.showMessageDialog(null, "Exported Successfully!!!");
            } catch (FileNotFoundException ex1) {
                ex1.printStackTrace();
            } catch (IOException ex1) {
                ex1.printStackTrace();
            } finally {
                if (ebu != null) {
                    try {
                        ebu.close();
                    } catch (IOException ex1) {
                        ex1.printStackTrace();
                    }
                }
                if (efu != null) {
                    try {
                        efu.close();
                    } catch (IOException ex1) {
                        ex1.printStackTrace();
                    }
                }
                if (ete != null) {
                    try {
                        ete.close();
                    } catch (IOException ex1) {
                        ex1.printStackTrace();
                    }
                }
            }
    }      

    }//GEN-LAST:event_jButton1ActionPerformed

    private void clear3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_clear3ActionPerformed

        delete();
        t1.setVisible(false);
        eamt.setText("");
        DefaultComboBoxModel dm = new DefaultComboBoxModel();
        inv.setModel(dm);
        item();
    }//GEN-LAST:event_clear3ActionPerformed
public void delete()
{
     try
{
  
  
       int row=t1.getSelectedRow();
String cell=t1.getModel().getValueAt(row,0).toString();
String sql="Delete from billing where bno=?";
 Class.forName("com.mysql.jdbc.Driver");
            Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jesh","root","hitech");
            
            PreparedStatement pst=con.prepareStatement(sql);
            pst.setString(1,cell);
              pst.executeUpdate();
JOptionPane.showMessageDialog(null,"Delete Successfull");


}
catch(Exception e)
{

}  
}
    public static void main(String args[]) {
    
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new viewinc().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton back;
    private javax.swing.JButton back1;
    private javax.swing.JButton clear;
    private javax.swing.JButton clear1;
    private javax.swing.JButton clear3;
    private javax.swing.JTextField eamt;
    private com.toedter.calendar.JDateChooser from;
    private javax.swing.JComboBox<String> inv;
    private javax.swing.JButton jButton1;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JLabel lbl1;
    private javax.swing.JLabel lbl2;
    private javax.swing.JLabel lbl3;
    private javax.swing.JLabel lbl7;
    private javax.swing.JLabel lbl8;
    private javax.swing.JButton month;
    private javax.swing.JPanel pan;
    private javax.swing.JFrame repos;
    private javax.swing.JTable t1;
    private com.toedter.calendar.JDateChooser to;
    private javax.swing.JButton track2;
    // End of variables declaration//GEN-END:variables
}
