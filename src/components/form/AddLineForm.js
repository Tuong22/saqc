// Form Thêm dòng của Trang Lập kế hoạch
const dataSource = [
  { id: 1, text: "Mẫu 1" },
  { id: 2, text: "Mẫu 2" },
  { id: 3, text: "Mẫu 3" },
];

export const AddLineForm = {
  items: [
    {
      itemType: "group",
      colSpan: 2,
      colCount: 3,
      items: [
        {
          dataField: "Bộ mẫu",
          label: { visible: false },
          editorType: "dxSelectBox",
          editorOptions: {
            label: {
              text: "Bộ mẫu <span style='color: red;'>*</span>",
              visible: true,
            },
            labelMode: "floating",
            validationRules: [
              { type: "required", message: "Bộ mẫu là bắt buộc" },
            ],
            dataSource: dataSource,
          },
        },
        {
          dataField: "Phân xưởng",
          label: { visible: false },
          editorType: "dxSelectBox",
          editorOptions: {
            label: "Phân xưởng",
            labelMode: "floating",
            validationRules: [
              { type: "required", message: "Phân xưởng là bắt buộc" },
            ],
            dataSource: dataSource,
          },
        },
        {
          dataField: "Điểm lấy mẫu",
          label: { visible: false },
          editorType: "dxSelectBox",
          editorOptions: {
            label: "Điểm lấy mẫu",
            labelMode: "floating",
            validationRules: [
              { type: "required", message: "Điểm lấy mẫu là bắt buộc" },
            ],
            dataSource: dataSource,
          },
        },
      ],
    },
    {
      colSpan: 2,
      dataField: "Tên mẫu",
      label: { visible: false },
      editorType: "dxSelectBox",
      editorOptions: {
        label: "Tên mẫu",
        labelMode: "floating",
        validationRules: [{ type: "required", message: "Tên mẫu là bắt buộc" }],
        dataSource: dataSource,
      },
    },
    {
      colSpan: 2,
      dataField: "Mục đích",
      label: { visible: false },
      editorType: "dxSelectBox",
      editorOptions: {
        label: "Mục đích chính",
        labelMode: "floating",
        validationRules: [
          { type: "required", message: "Mục đích chính là bắt buộc" },
        ],
        dataSource: dataSource,
      },
    },
    {
      colSpan: 2,
      dataField: "Chỉ tiêu kiểm soát",
      label: { visible: false },
      editorType: "dxSelectBox",
      editorOptions: {
        label: "Chỉ tiêu kiểm soát",
        labelMode: "floating",
        validationRules: [
          { type: "required", message: "Chỉ tiêu kiểm soát là bắt buộc" },
        ],
        dataSource: dataSource,
      },
    },
    {
      itemType: "group",
      colSpan: 2,
      colCount: 3,
      items: [
        {
          dataField: "Quy trình lấy mẫu",
          label: { visible: false },
          editorType: "dxSelectBox",
          editorOptions: {
            label: "Quy trình lấy mẫu",
            labelMode: "floating",
            validationRules: [
              { type: "required", message: "Quy trình lấy mẫu là bắt buộc" },
            ],
            dataSource: dataSource,
          },
        },
        {
          dataField: "Phương pháp thử nghiệm",
          label: { visible: false },
          editorType: "dxSelectBox",
          editorOptions: {
            label: "Phân xưởng",
            labelMode: "floating",
            validationRules: [
              {
                type: "required",
                message: "Phương pháp thử nghiệm là bắt buộc",
              },
            ],
            dataSource: dataSource,
          },
        },
        {
          dataField: "Phòng thử nghiệm",
          label: { visible: false },
          editorType: "dxSelectBox",
          editorOptions: {
            label: "Phòng thử nghiệm",
            labelMode: "floating",
            validationRules: [
              { type: "required", message: "Phòng thử nghiệm là bắt buộc" },
            ],
            dataSource: dataSource,
          },
        },
      ],
    },
    {
      itemType: "group",
      colSpan: 2,
      colCount: 2,
      items: [
        {
          dataField: "Giờ lấy mẫu",
          label: { visible: false },
          editorType: "dxAutocomplete",
          editorOptions: {
            label: "Giờ lấy mẫu",
            labelMode: "floating",
          },
        },
        {
          dataField: "CRITICAL",
          label: { visible: false },
          editorType: "dxSelectBox",
          editorOptions: {
            label: "CRITICAL",
            labelMode: "floating",
          },
          dataSource: dataSource,
        },
      ],
    },
    {
      caption: "KẾ HOẠCH TEST RUN DẦU THÔ",
      itemType: "group",
      colSpan: 2,
      colCount: 5,
      items: [
        {
          caption: "Step At 5%",
          itemType: "group",
          colCount: 2,
          items: [
            {
              dataField: "Step At 5%",
              editorType: "dxCheckBox",
            },
          ],
        },
        {
          caption: "Step At 10%",
          itemType: "group",
          colCount: 2,
          items: [
            {
              dataField: "5:00",
              editorType: "dxCheckBox",
            },
            {
              dataField: "20:00",
              editorType: "dxCheckBox",
            },
          ],
        },
        {
          caption: "Step At 15%",
          itemType: "group",
          colCount: 2,
          items: [
            {
              dataField: "5:00",
              editorType: "dxCheckBox",
            },
            {
              dataField: "20:00",
              editorType: "dxCheckBox",
            },
          ],
        },
        {
          caption: "Final Step 1(15%)",
          itemType: "group",
          colCount: 2,
          items: [
            {
              dataField: "5:00",
              editorType: "dxCheckBox",
            },
            {
              dataField: "20:00",
              editorType: "dxCheckBox",
            },
          ],
        },
        {
          caption: "Final Step 2(15%)",
          itemType: "group",
          colCount: 2,
          items: [
            {
              dataField: "5:00",
              editorType: "dxCheckBox",
            },
            {
              dataField: "20:00",
              editorType: "dxCheckBox",
            },
          ],
        },
      ],
    },
    {
      itemType: "group",
      colSpan: 2,
      colCount: 2,
      items: [
        {
          dataField: "Tần suất VHBT",
          label: { visible: false },
          editorType: "dxAutocomplete",
          editorOptions: {
            label: "Tần suất VHBT",
            labelMode: "floating",
            buttons: [
              {
                location: "after",
                name: "add",
                options: {
                  icon: "add",
                  onClick: function () {
                    // console.log("Nút 'add' đã được nhấn");
                  },
                },
              },
            ],
          },
        },
        {
          dataField: "Tần suất các dịp lễ tết (>3ngày)",
          label: { visible: false },
          editorType: "dxAutocomplete",
          editorOptions: {
            label: "Tần suất các dịp lễ tết (>3ngày)",
            labelMode: "floating",
            buttons: [
              {
                location: "after",
                name: "add",
                options: {
                  icon: "add",
                  onClick: function () {
                    // console.log("Nút 'add' đã được nhấn");
                  },
                },
              },
            ],
          },
        },
      ],
    },
  ],
};
