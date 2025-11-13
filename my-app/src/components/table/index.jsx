import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css';

const columns = [
  { id: 'name', label: 'Nome do repositório', minWidth: 200 },
  { id: 'commitCount', label: 'Qtd de commit', minWidth: 100, align: 'center' },
  { id: 'lastMessage', label: 'Msg Último commit', minWidth: 250 },
  { id: 'lastHash', label: 'Hash do último commit', minWidth: 200, align: 'center' },
];

export default function TabUserInformation({ repoData }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    };

    const rows = repoData?.map((repo) => ({
        name: repo.name,
        commitCount: repo.defaultBranchRef?.target?.history?.totalCount || 0,
        lastMessage: repo.defaultBranchRef?.target?.history?.nodes?.[0]?.message || 'Sem commits',
        lastHash: repo.defaultBranchRef?.target?.history?.nodes?.[0]?.oid?.slice(0, 10) || '-',
    })) || [];

    return (
        <div className={styles.tableContainer}> <Paper
        sx={{
            width: '100%',
            overflow: 'hidden',
            mt: 4,
            borderRadius: 3,
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        }}
        >
        <Typography
            variant="h6"
            sx={{
            p: 2,
            fontWeight: 300,
            color: '#333',
            fontFamily: 'Gotham, Roboto, sans-serif',
            }}
        >
            Informações do Usuário
        </Typography>

        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="tabela de repositórios">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                        minWidth: column.minWidth,
                        backgroundColor: '#f9f9f9',
                        fontWeight: 300,
                        fontSize: '0.95rem',
                        color: '#222',
                    }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>

            <TableBody>
                {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={column.id} align={column.align}>
                            {value}
                        </TableCell>
                        );
                    })}
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>

        <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper> </div>
    );
}
