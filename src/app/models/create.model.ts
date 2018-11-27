export class Create {
    tbname: string;
    columns: object;

    setTbName(tbname:string)
    {
        this.tbname=tbname;
    }

    getTbName()
    {
        return this.tbname;
    }

    setColumns(columns:object)
    {
        this.columns=columns;
    }

    getColumns()
    {
        return this.columns;
    }
  }