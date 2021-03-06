
Ext.define('Penggajian.view.transaksi.approvalkoreksi.ApprovalKoreksi',{
    extend: 'Ext.container.Container',
    xtype: 'TabApprovalKoreksi',
    alias: 'widget.ApprovalKoreksi',
    requires: [
        'Penggajian.view.transaksi.approvalkoreksi.ApprovalKoreksiController',
        'Penggajian.view.transaksi.approvalkoreksi.ApprovalKoreksiModel'
    ],

    controller: 'approvalkoreksi',
    viewModel: {
        type: 'approvalkoreksi'
    },
//    html: 'Hello, World!!',
    id: 'tab2b3',
    title: 'Approval Koreksi Absensi',
    closable: true,        
    layout: 'border', 
    items:[
        {
        xtype:'grid',
        id:'idapprovalkoreksilist',
        region:'center',            
        bind:{
                store:'{strapproval}'
            },
//        store: 'storeapprovalkoreksi',
        columns: [
        {
            xtype: 'actioncolumn',
            header: 'approve',
            menuDisabled: true,
            sortable: false,   
            align:'center',
            width: 85,
            items: [
            {
                iconCls: 'icon-approval',
                tooltip: 'Approval',
                handler: 'onApproveClick' 
            }]
                                
        },  
        {
            xtype: 'actioncolumn',
            header: 'Reject',
            menuDisabled: true,
            sortable: false,   
            align:'center',
            width: 85,
            items: [
            {
                iconCls: 'icon-reject',
                tooltip: 'Reject',
                handler: 'onRejectClick' 
            }]
                                
        },  
        {
            text:'Koreksi ID',
            dataIndex:'koreksi_id',
            sortable:false,
            width:100,
            hidden:false,
            align:'center'
        },
        {
            text:'Keterangan',
            dataIndex:'keterangan',
            sortable:false,
            width:60,
            hidden:true
        },
        {
            text:'Tanggal',
            dataIndex:'tgl',
            sortable:true,
            width:100,
            hidden:false,
            align:'center'
        },
        {
            text:'PIN',
            dataIndex:'pin',
            sortable:false,
            width:60,
            hidden:true
        },
        {
            text:'KODE_Jabatan',
            dataIndex:'kode_jabatan',
            sortable:false,
            width:60,
            hidden:true
        },
        
{
            text:'NIK',
            dataIndex:'nik',
            sortable:false,
            width:100,
            hidden:false,
            align:'center'
        },

        {
            text:'Nama',
            dataIndex:'nama',
            sortable:false,
            width:150,
            hidden:false,
            align:'left'
        },        

        {
            text:'Hari',
            dataIndex:'hari',
            sortable:false,
            width:80,
            hidden:false,
            align:'center'
        },
            {
                text: 'Pantangan', 
                dataIndex: 'is_pantangan', 
                xtype:'checkcolumn',
                align:'center',
                processEvent:function(){return false;},
                width:80
            },
        {
            header: 'Jadwal Seharusnya',
            columns:[{
            text:'Shift',
            dataIndex:'kode_shift',
            sortable:false,
            width:80,
            hidden:false,
            align:'center'
        },
            {
                text: 'I/Masuk', 
                dataIndex: 'jam_kerja_1', 
                align:'center',
                xtype: 'datecolumn',   
                format:'H:i',
                width:100
            },
            {
                text: 'II/Keluar/Pulang', 
                dataIndex: 'jam_kerja_2', 
                align:'center',
                xtype: 'datecolumn',   
                format:'H:i',
                width:100
            },
            {
                text: 'III/Masuk', 
                dataIndex: 'jam_kerja_3', 
                align:'center',
                xtype: 'datecolumn',   
                format:'H:i',
                width:100
            },
            {
                text: 'IV/Keluar/Pulang', 
                dataIndex: 'jam_kerja_4', 
                align:'center',
                xtype: 'datecolumn',   
                format:'H:i',
                width:100
            }]
        },
        
        {
            header: 'Realisasi',
            columns:[{
            text:'Masuk',
            xtype:'datecolumn',
            dataIndex:'masuk',
            sortable:false,
            width:100,
            hidden:false,
            align:'center',   
            format:'H:i'
        },
        {
            text:'Keluar',
            xtype:'datecolumn',
            dataIndex:'keluar',
            sortable:false,
            width:100,
            hidden:false,
            align:'center',   
            format:'H:i'
        },
        {
            text:'Masuk Kembali',
            xtype:'datecolumn',
            dataIndex:'masuk_kembali',
            sortable:false,
            width:100,
            hidden:false,
            align:'center',   
            format:'H:i'
        },
        {
            text:'Pulang',
            xtype:'datecolumn',
            dataIndex:'pulang',
            sortable:false,
            width:100,
            hidden:false,
            align:'center',   
            format:'H:i'
        },{
            text:'JamAbsen',            
            dataIndex:'jmljamabsen',
            sortable:false,
            width:100,
            hidden:false,
            align:'right'
        },{
            text:'Lembur Masuk',
            xtype:'datecolumn',
            dataIndex:'lembur_masuk',
            sortable:false,
            width:100,
            hidden:false,
            align:'center',   
            format:'H:i'
        },{
            text:'Lembur Keluar',
            xtype:'datecolumn',
            dataIndex:'lembur_keluar',
            sortable:false,
            width:100,
            hidden:false,
            align:'center',   
            format:'H:i'
        }]
        }
        ,
        
        {
            text:'Tanggal Koreksi',            
            dataIndex:'tglkoreksi',
            sortable:false,
            width:100,
            hidden:false,
            align:'left'
        },
        
        {
            text:'Koreksi_By',            
            dataIndex:'koreksi_by',
            sortable:false,
            width:100,
            hidden:false,
            align:'left'
        }

        

        
        ],
        
        bbar: [                
        
        {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            pageSize: 10,
            bind:{
                store:'{strapproval}'
            }
//            store: 'storeapprovalkoreksi'
        }]
    //        ,
    //        features:[{
    //            ftype: 'grouping',            
    //            groupHeaderTpl: '<b>{name}',
    //            hideGroupedHeader: false,
    //            startCollapsed: false,
    //            id: 'storetukaroff_grouping'
    //        }]
    }
    ],
    listeners:{
        show:'onShow'
    }
    
});
