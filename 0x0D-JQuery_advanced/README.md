<!DOCTYPE html>
<html lang="en" dir="ltr">

    <head>
        <meta charset="utf-8" />
        <title>Task 0</title>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>

      

    </head>

    <body>
        <script type="application/javascript">
        $(document).ready(function(){
            
            function createFamilyTree () {
                $("body").append("<table></table>");
                $("table").append("<thead></thead>");
                $("table").append("<tbody></tbody>");

                $("thead").append("<tr></tr>");
                $("thead > tr").append("<th>Firstname </th>");
                $("thead > tr").append("<th>Lastname</th>");
            }

            function addNewMember(firstName, lastName, position) {
                let tr =  $("<tr></tr>");
                let tdx =  $("<td>(X)</td>");
               
                tdx.css("background-color", "orange");
                tdx.click( function () {
                   tr.remove();
                    
                });
                tr.append("<td> " + firstName + "</td>");
                $(tr).append("<td> " + lastName + " </td>");
                $(tr).append(tdx);

                if(position === 'before') {
                    $("tbody").prepend(tr);
                    
                } else {
                    $("tbody").append(tr);
                    
                }
            }
            function createForm() {
                $('body').prepend('<div></div>');
                $('div').append('<input type="text" > </input>');
                $('div').append('<input type="text" > </input>');
                $('div').append('<select> </select>');
                $('select').append('<option value="before">before</option>')
                $('select').append('<option value="after">after</option>')
                $('div').append('<input type="submit"> </input>');
                
                $(":submit").click( function (){
                    let str = $('input').first().val();
                    let str2 = $(':text:nth-of-type(2)').val();
                    let inp = $("option:selected").val();
                    addNewMember(str,str2,inp);  
                });
            }

           
                createFamilyTree ();
                addNewMember("Arielle", "Snizt");
                addNewMember("Fanette", "Snizt");
                addNewMember("Gerard", "Snizt","after");
                addNewMember("Victor", "Sffalva","before");
                createForm();
                
            });
        </script>
    </body>

</html>