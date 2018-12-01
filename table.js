$(document).ready(function () {
    // tooltip    
    $('[data-toggle="tooltip"]').tooltip();
    $('#EditModal').on('show.bs.modal',function(event){
        var btn=$(event.relatedTarget);
        var title = btn.data('title');
        var modal = $(this);
        modal.find('.modal-title').text(title);
        
    })
    $('#RemoveModal').on('show.bs.modal',function(event){
        var btn=$(event.relatedTarget);
        var title = btn.data('title');
        var modal = $(this);
        modal.find('.modal-title').text("刪除 "+title);
        modal.find('.modal-body').text("確認是否刪除 "+title+" ?");
        
    })
});