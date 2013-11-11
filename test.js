using('seq1.js');
using('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
using('http://code.jquery.com/ui/1.10.3/jquery-ui.js');
using('http://cdn.jquerytools.org/1.2.7/all/jquery.tools.min.js');
using('red.css');

using.ready(function(){
    // console.log('using ready');
    $("#debug").html('loaded<br />'
        +'<br />$/jQuery is '+(typeof $)
        +'<br />$.fn.draggable is '+(typeof $.fn.draggable)
        +'<br />$.fn.tabs is '+(typeof $.fn.tabs)
        +'<br />seq1 value is "'+(window.seq1)+'"'
    );
    
    // setTimeout(function(){
        using('seq2.js');
        using('blue.css').ready(function(){
            $("#debug").html($("#debug").html()
                +'<br />seq2 value is "'+(window.seq2)+'"'
                +'<br />blue.css loaded');
        });
    // }, 1000)
})
