//alert('loaded');
jQuery(document).ready(function($) {
    $('#task').on('submit',function(e) {
        e.preventDefault();
        var preprend = $('#text').val();
        if(preprend!=''){
            var str1="<p>";
            var str2="</p>";
            var res = str1.concat(preprend, str2);
            $( "#tasks" ).prepend( res );
        }else{
            alert('Text empty!');
        }
    })
})
