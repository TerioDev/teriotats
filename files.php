<?php
define ("MAX_SIZE","5000"); 
function getExtension($str)
{
         $i = strrpos($str,".");
         if (!$i) { return ""; }
         $l = strlen($str) - $i;
         $ext = substr($str,$i+1,$l);
         return $ext;
}

$errors=0;

if(isset($_POST['sendfiles'])) 
{
  $uploaddir = "files/"; //a directory inside
    foreach ($_FILES['photos']['name'] as $name => $value)
    {
        $filename = stripslashes($_FILES['photos']['name'][$name]);
     //get the extension of the file in a lower case format
          $extension = getExtension($filename);
         $extension = strtolower($extension);
        echo "\n This is the extension: ",$extension;
         if (($extension != "jpg") && ($extension != "jpeg") && ($extension != "png") && ($extension != "gif")) 
         {
        //print error message
        ?>
           <h4>Unknown extension!</h4>
          <?php
             $errors=1;
         }
        else
        {
            $size=filesize($_FILES['photos']['tmp_name'][$name]);
            if ($size > MAX_SIZE*1024)
            {
            ?>
               <h4>You have exceeded the size limit!</h4>
              <?php
                $errors=1;
            }
            $image_name=$filename.'.'.$extension;
            $newname="files/".$image_name;
            $copied = copy($_FILES['photos']['tmp_name'][$name], $newname);
            if (!$copied) 
            {
                ?>
                <h4>Copy unsuccessfull!</h4>
                <?php
                $errors=1;
            }

        }

    }
    //echo "Images uploaded successfully";
}
//mysql_close($dbhandle);
?>