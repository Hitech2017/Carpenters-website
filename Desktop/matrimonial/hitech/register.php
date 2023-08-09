<!doctype html>
<html lang="en">
  <head>
   
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="{%static 'css/bootstrap.css' %}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <style>
    .bttn{

background: radial-gradient(#141d28, #212b38);
color:white;
width: 100px;
padding:10px;
}
.btt{
background: radial-gradient(#141d28, #212b38);
color:white;
width: 200px;
padding:13px;
text-decoration: none;
}
.bt{
background: radial-gradient(#141d28, #212b38);
color:white;
width: 100px;
padding:10px;
text-decoration: none;
.error{
	color:red;
}

.correct{
	color:green;
}
}
  </style>
    <title>employee</title>
  </head>
  <body>
    <div style="width: 100%;background:radial-gradient(#141d28, #212b38);height: 40px;">
    </div>
  <div  >  <!-- class="container"
   -->
      <div class="col-10">
        <div style="margin-left: 100px; margin-top:60px;">
         <h2>Create employee</h2>
          <hr class="mt-0 mb-4">
    
   
 
            <form method="POST" action="register.php" validate  enctype="multipart/form-data">
          
              
              
            
             
          <div class="row">
            <div class="col-4">
              <label for="Name">Name</label>
              <input type="text" name="Name"  class="form-control">
             </div>
            
             <div class="col-4">
              <label for="Date_Of_Birth">Date_Of_Birth</label>
              <input type="date" name="Date_Of_Birth"  class="form-control">
             </div>
          </div>
          <div class="row">
            <div class="col-4">
              <label for="Gender">Religion/Community</label>
              <input type="text" name="Religion"  class="form-control">
             </div>
            
             <div class="col-4">
              <label for="Caste">Caste</label>
              <input type="text" name="Caste"  class="form-control">
             </div>
          </div>
          <div class="row">
            <div class="col-4">
              <label for="Sub Caste">Sub Caste</label>
              <input type="text" name="Sub_Caste"  class="form-control"><span id="message"></span>
             </div>
            
             <div class="col-4">
              <label for="Profession">Profession</label>
              <input type="text" name="Profession"  class="form-control"><span id="message"></span>
             </div>
          </div>
          <div class="row">
            <div class="col-4">
              <label for="Education">Education</label>
              <input type="text" name="Education"  class="form-control">
             </div>
            
             <div class="col-4">
              <label for="Annual Income">Annual Income</label>
              <input type="number" name="Annual_Income"  class="form-control">
             </div>
          </div>
          <div class="row">
            <div class="col-4">
              <label for="Work Location">Work Location</label>
              <input type="text" name="Work_Location"  class="form-control">
             </div>
            
             <div class="col-4">
              <label for="Native Place">Native Place</label>
              <input type="text" name="Native_Place"  class="form-control">
             </div>
          </div>
          <div class="row">
            <div class="col-4">
              <label for="Your Photo">Your Photo</label>
              <input type="file" name="image"  class="form-control">
             </div>
            
             <div class="col-4">
              <label for="Father Name">Father Name</label>
              <input type="text" name="Father_Name"  class="form-control">
             </div>
          </div>

          <div class="row">
            <div class="col-4">
              <label for="Father Occupation">Father Occupation</label>
              <input type="text" name="Father_Occupation"  class="form-control">
             </div>
            
             <div class="col-4">
              <label for="Mother Name">Mother Name</label>
              <input type="text" name="Mother_Name"  class="form-control">
             </div>
          </div>






          <div class="row">
            <div class="col-4">
              <label for="Mother Occupation">Mother Occupation</label>
              <input type="text" name="Mother_Occupation"  class="form-control">
             </div>
            
             <div class="col-4">
              <label for="Sibling">Sibling</label>
              <input type="text" name="Sibling"  class="form-control">
             </div>
          </div>
          <div class="row">
            <div class="col-4">
              <label for="About Your Family">About Your Family</label>
              <input type="text" name="About_Your_Family"  class="form-control">
             </div>
            
             <div class="col-4">
              <label for="Partner Preference">Partner Preference</label>
              <input type="text" name="Partner_Preference"  class="form-control">
             </div>
          </div>
          <div class="row">
            <div class="col-4">
              <label for="Age From">Age From</label>
              <input type="number" name="Age_From"  class="form-control">
             </div>
            
             <div class="col-4">
              <label for="Age To">Age To</label>
              <input type="number" name="Age_To"  class="form-control">
             </div>
          </div>

          <div class="row">
          
             <div class="col-4">
              <label for="Height From">Height From</label>
              <input type="number" name="Height_From"  class="form-control">
             </div>
             
             <div class="col-4">
              <label for="Height To">Height To</label>
              <input type="number" name="Height_To"  class="form-control">
             </div>
          </div>

          <div class="row">
            <div class="col-4">
              <label for="Education Pref">Education Pref</label>
              <input type="text" name="Education_Pref"  class="form-control">
             </div>
            
             <div class="col-4">
              <label for="Religion Pref">Religion Pref</label>
              <input type="text" name="Religion_Pref"  class="form-control">
             </div>
          </div>
          <div class="row">
            <div class="col-4">
              <label for="Occupation Pref">Occupation Pref</label>
              <input type="text" name="Occupation_Pref"  class="form-control">
             </div>
            
             
          </div>



          <br><br>
          <div class="row">
            <div class="col-4">
              <label>Caste :</label>
            
             </div>
            
             </div>
             <br>
          <div class="row">
            <div class="col-4">
              <label for="Marital Pref">Marital Pref</label>
              <input type="text" name="Marital_Pref"  class="form-control">
             </div>
             <div class="col-4">
              <label for="Residential Pref">Residential Pref</label>
              <input type="text" name="Residential_Pref"  class="form-control">
             </div>
            
             
       
          
    
                
                <div class="col-6"><br>
                    <button type="submit"name="submit" class="bttn">Apply</button>
                    <a class="btt" href="adminhome.php">Back</a>
                </div>
              </div>
            
              </div>     
            </form>
            <?php
$connection = mysqli_connect("localhost","root","");
$db = mysqli_select_db($connection,'project');
if(isset($_POST['submit']))
{ 
    $Name = $_POST['Name'];
    $Date_Of_Birth = $_POST['Date_Of_Birth'];
    $Religion = $_POST['Religion'];
    $Caste = $_POST['Caste'];
    $Sub_Caste = $_POST['Sub_Caste'];
    $Profession = $_POST['Profession'];
    $Education = $_POST['Education'];
    $Annual_Income = $_POST['Annual_Income'];
    $Work_Location = $_POST['Work_Location'];
    $Native_Place = $_POST['Native_Place'];

    $filename = $_FILES["image"]["name"];
    $tempname = $_FILES["image"]["tmp_name"];
    $folder = "./image/" . $filename;
    // $Your_Photo = addslashes(file_get_contents($_FILES["image"]["tmp_name"]));
    $Father_Name = $_POST['Father_Name'];
    $Father_Occupation = $_POST['Father_Occupation'];
    $Mother_Name = $_POST['Mother_Name'];
    $Mother_Occupation = $_POST['Mother_Occupation'];
    $Sibling = $_POST['Sibling'];
    $About_Your_Family = $_POST['About_Your_Family'];
    $Partner_Preference = $_POST['Partner_Preference'];
    $Age_From = $_POST['Age_From'];
    $Height_From = $_POST['Height_From'];
    $Education_Pref = $_POST['Education_Pref'];
    $Religion_Pref = $_POST['Religion_Pref'];
    $Occupation_Pref = $_POST['Occupation_Pref'];
    $Marital_Pref = $_POST['Marital_Pref'];
    $Residential_Pref = $_POST['Residential_Pref'];

    $Age_To = $_POST['Age_To'];
    $Height_To = $_POST['Height_To'];
    $query = "INSERT INTO `reg`(`Name`,`Date_Of_Birth`,`Religion`,`Caste`,`Profession`,`Education`,`Annual_Income`,`Work_Location`
    ,`Native_Place`,`Your_Photo`,`Father_Name`,`Father_Occupation`,`Mother_Name`,`Mother_Occupation`,`Sibling`,`About_Your_Family`,`Partner_Preference`,`Age_From`
    ,`Height_From`,`Education_Pref`,`Religion_Pref`,`Occupation_Pref`,`Marital_Pref`,`Residential_Pref`,`Sub_Caste`,`Age_To`,`Height_To`)
     VALUES ('$Name','$Date_Of_Birth','$Religion','$Caste','$Profession','$Education','$Annual_Income','$Work_Location','$Native_Place','$filename'
     ,'$Father_Name','$Father_Occupation','$Mother_Name','$Mother_Occupation','$Sibling','$About_Your_Family','$Partner_Preference','$Age_From'
     ,'$Height_From','$Education_Pref','$Religion_Pref','$Occupation_Pref','$Marital_Pref','$Residential_Pref','$Sub_Caste','$Age_To','$Height_To')";
    $query_run = mysqli_query($connection,$query);
    // Now let's move the uploaded image into the folder: image
    if (move_uploaded_file($tempname, $folder)) {
      echo '<script type="text/javascript"> alert ("User Created  successfully!") </script>';
  } else {
      echo '<script type="text/javascript">  alert ("Failed to upload image!")</script>';
  }
    // if($query_run)
    // {
    //     echo '<script type="text/javascript"> alert("Image Profile Uploaded") </script>';

    // }
    // else{
    //     echo '<script type="text/javascript"> alert("Image Profile Not Uploaded") </script>';
    // }
}
?>


          </div>
        </div>  
     
  </body>
</html>
                
     