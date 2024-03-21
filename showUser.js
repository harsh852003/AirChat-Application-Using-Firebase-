function showUser(users){
      
     
    var html = '';
    for(let user in users){
      html = html + '<div class="card container justify-center my-2 " style="background-color:black;">'+
      '<div class="card-body loadchat" data-user_id = "'+users[user].userid+'"  data-user_email = "'+users[user].email+'" style="color: white; font-weight:bolder; font-size:medium;">' +
        users[user].email +
    '</div>'+
    '</div>'
    }
    $("#user-list").html(html)
  }