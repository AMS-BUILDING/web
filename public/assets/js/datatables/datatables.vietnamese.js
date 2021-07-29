var vietnamese = {
    "sProcessing": "Đang xử lý...",
    "sLengthMenu": "Xem _MENU_ mục",
    "sZeroRecords": "Danh sách trống",
    "sInfo": "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
    "sInfoEmpty": "Đang xem 0 đến 0 trong tổng số 0 mục",
    "sInfoFiltered": "(được lọc từ _MAX_ mục)",
    "sInfoPostFix": "",
    "sSearch": "Tìm kiếm:",
    "sUrl": "",
    "oPaginate": {
        "sFirst": "Đầu",
        "sPrevious": "Trước",
        "sNext": "Tiếp",
        "sLast": "Cuối"
    }
};

$(document).ready(function () {
    var t = $('#accounts,\
               #employee,\
               #customer,\
               #materials,\
               #products,\
               #orders,\
               #provider,\
               #detailperson,\
               #type-of-material,\
               #unit-of-material,\
               #role-of-account,\
               #tax').DataTable({
        "oLanguage": vietnamese
    });

    t.on('order.dt search.dt', function () {
        t.column(0, {search: 'applied', order: 'applied'}).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
});