export class Create {
    tbname: string;
    columns: any;

    setTbName(tbname:string)
    {
        this.tbname=tbname;
    }

    getTbName()
    {
        return this.tbname;
    }

    setColumns(columns:any)
    {
        this.columns=columns;
    }

    getColumns()
    {
        return this.columns;
    }
  }